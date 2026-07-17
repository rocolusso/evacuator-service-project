import { NextRequest, NextResponse } from 'next/server';
import { formSchema } from '@/lib/schemas';
import { sendToTelegram, formatMessage } from '@/lib/telegram';

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 },
    );
  }

  const parsed = formSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, phone, message } = parsed.data;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatIdsRaw = process.env.TELEGRAM_CHAT_IDS;

  if (!botToken || !chatIdsRaw) {
    console.error('[form/route] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_IDS');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 },
    );
  }

  const chatIds = chatIdsRaw.split(',').map((id) => id.trim()).filter(Boolean);
  const text = formatMessage(name, phone, message);

  const results = await Promise.allSettled(
    chatIds.map((chatId) => sendToTelegram(botToken, chatId, text)),
  );

  const failures = results.filter((r) => r.status === 'rejected');
  if (failures.length > 0) {
    console.error(`[form/route] ${failures.length}/${chatIds.length} Telegram sends failed`);
  }

  const allFailed = failures.length === chatIds.length;
  if (allFailed) {
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
