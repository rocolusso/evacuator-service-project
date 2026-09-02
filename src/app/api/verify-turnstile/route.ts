import { NextRequest, NextResponse } from 'next/server';

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const token = (body as { token?: unknown })?.token;
  if (typeof token !== 'string' || token.length === 0) {
    return NextResponse.json({ success: false, error: 'Missing token' }, { status: 400 });
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error('[verify-turnstile/route] Missing TURNSTILE_SECRET_KEY');
    return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
  }

  const params = new URLSearchParams();
  params.append('secret', secretKey);
  params.append('response', token);

  const ip = req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for');
  if (ip) {
    params.append('remoteip', ip);
  }

  try {
    const verifyRes = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    if (!verifyRes.ok) {
      console.error(`[verify-turnstile/route] siteverify HTTP ${verifyRes.status}`);
      return NextResponse.json({ success: false }, { status: 200 });
    }

    const result = (await verifyRes.json()) as { success?: boolean; 'error-codes'?: string[] };

    if (!result.success) {
      return NextResponse.json({ success: false }, { status: 200 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[verify-turnstile/route] siteverify request failed', err);
    // Fail-open at the tracking level: we simply do not confirm the token.
    // The caller (client) already never blocks the actual tel: navigation
    // on this result — see src/lib/turnstile.ts / analytics.ts.
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
