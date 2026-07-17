'use client';

import { useState } from 'react';
import { formSchema } from '@/lib/schemas';
import type { Locale } from '@/types';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface ContactFormProps {
  t: Locale;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm({ t }: ContactFormProps) {
  const { form } = t;
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({ name: '', phone: '', message: '' });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = formSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      const issues = result.error.issues ?? (result.error as any).errors ?? [];
      (issues as Array<{ path: unknown[]; message: string }>).forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) {
          if (field === 'name') fieldErrors.name = form.nameError;
          if (field === 'phone') fieldErrors.phone = form.phoneError;
          if (field === 'message') fieldErrors.message = form.messageError;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setState('loading');

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (res.ok) {
        setState('success');
        setValues({ name: '', phone: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <section
      id='contact-form'
      className='py-16 md:py-24'
      style={{ background: 'var(--surface)' }}
    >
      <div className='container mx-auto px-4 max-w-lg'>
        <h2
          className='text-2xl sm:text-3xl font-extrabold text-center mb-4'
          style={{ color: 'var(--foreground)' }}
        >
          {form.title}
        </h2>

        <div className='w-12 h-1 rounded-full mx-auto mb-8' style={{ background: 'var(--accent)' }} />

        {state === 'success' ? (
          <div
            className='text-center p-8 rounded-2xl border'
            style={{ background: 'var(--card)', borderColor: 'var(--accent)' }}
          >
            <span className='text-5xl block mb-4' aria-hidden='true'>✅</span>
            <p className='font-semibold text-base' style={{ color: 'var(--foreground)' }}>
              {form.success}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className='flex flex-col gap-4 p-6 md:p-8 rounded-2xl border'
            style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}
          >
            {/* Name */}
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='form-name'
                className='text-sm font-semibold'
                style={{ color: 'var(--foreground)' }}
              >
                {form.namePlaceholder}
              </label>
              <input
                id='form-name'
                name='name'
                type='text'
                autoComplete='name'
                value={values.name}
                onChange={handleChange}
                placeholder={form.namePlaceholder}
                disabled={state === 'loading'}
                className='w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150'
                style={{
                  background: 'var(--surface)',
                  borderColor: errors.name ? '#ef4444' : 'var(--border)',
                  color: 'var(--foreground)',
                }}
                aria-describedby={errors.name ? 'form-name-error' : undefined}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p
                  id='form-name-error'
                  className='text-xs text-red-500'
                  role='alert'
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='form-phone'
                className='text-sm font-semibold'
                style={{ color: 'var(--foreground)' }}
              >
                {form.phonePlaceholder}
              </label>
              <input
                id='form-phone'
                name='phone'
                type='tel'
                autoComplete='tel'
                value={values.phone}
                onChange={handleChange}
                placeholder={form.phonePlaceholder}
                disabled={state === 'loading'}
                className='w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150'
                style={{
                  background: 'var(--surface)',
                  borderColor: errors.phone ? '#ef4444' : 'var(--border)',
                  color: 'var(--foreground)',
                }}
                aria-describedby={errors.phone ? 'form-phone-error' : undefined}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p
                  id='form-phone-error'
                  className='text-xs text-red-500'
                  role='alert'
                >
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='form-message'
                className='text-sm font-semibold'
                style={{ color: 'var(--foreground)' }}
              >
                {form.messagePlaceholder}
              </label>
              <textarea
                id='form-message'
                name='message'
                rows={4}
                value={values.message}
                onChange={handleChange}
                placeholder={form.messagePlaceholder}
                disabled={state === 'loading'}
                className='w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 resize-none'
                style={{
                  background: 'var(--surface)',
                  borderColor: errors.message ? '#ef4444' : 'var(--border)',
                  color: 'var(--foreground)',
                }}
                aria-describedby={errors.message ? 'form-message-error' : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p
                  id='form-message-error'
                  className='text-xs text-red-500'
                  role='alert'
                >
                  {errors.message}
                </p>
              )}
            </div>

            {state === 'error' && (
              <p
                className='text-sm text-red-500 text-center'
                role='alert'
              >
                {form.error}
              </p>
            )}

            <button
              type='submit'
              disabled={state === 'loading'}
              className='w-full py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed'
              style={{
                background: 'var(--accent)',
                color: 'var(--accent-foreground)',
              }}
            >
              {state === 'loading' ? form.sending : form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
