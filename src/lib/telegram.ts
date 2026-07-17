const TELEGRAM_API = 'https://api.telegram.org';
const TIMEOUT_MS = 5000;

export async function sendToTelegram(
  botToken: string,
  chatId: string,
  text: string,
): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(
      `${TELEGRAM_API}/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
        signal: controller.signal,
      },
    );

    if (!res.ok) {
      throw new Error(`Telegram API error: ${res.status}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

export function formatMessage(name: string, phone: string, message: string): string {
  return [
    '🚛 <b>Новая заявка с сайта Evacuator</b>',
    '',
    `👤 <b>Имя:</b> ${name}`,
    `📞 <b>Телефон:</b> ${phone}`,
    `📝 <b>Сообщение:</b> ${message}`,
  ].join('\n');
}
