import type { Locale, LocaleCode } from '@/types';
import ro from '@/locales/ro';
import ru from '@/locales/ru';

const locales: Record<LocaleCode, Locale> = { ro, ru };

export function getTranslations(locale: LocaleCode): Locale {
  return locales[locale] ?? locales.ro;
}
