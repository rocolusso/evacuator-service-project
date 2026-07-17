export type LocaleCode = 'ro' | 'ru';

export interface FaqItem {
  q: string;
  a: string;
}

export interface PricingItem {
  title: string;
  price: string;
  per: string;
  icon: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface Locale {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    ctaCall: string;
    ctaPrice: string;
    badge: string;
  };
  advantages: {
    h2: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
  };
  pricing: {
    h2: string;
    desc: string;
    items: PricingItem[];
  };
  services: {
    h2: string;
    items: ServiceItem[];
  };
  faq: {
    h2: string;
    items: FaqItem[];
  };
  seo: {
    h2: string;
    text1: string;
    h3_1: string;
    text2: string;
    h3_2: string;
    text3: string;
  };
  footer: {
    rights: string;
    phone: string;
    workingHours: string;
  };
  cookie: {
    message: string;
    accept: string;
  };
  nav: {
    langLabel: string;
    langHref: string;
    phone: string;
  };
  form: {
    title: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    nameError: string;
    phoneError: string;
    messageError: string;
  };
}

export interface FormPayload {
  name: string;
  phone: string;
  message: string;
}
