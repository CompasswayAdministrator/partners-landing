import { api } from "@api/client";
import { PARTNERS_EMAIL } from "@config/env";

const ENDPOINT = "/users/send-consultation-email/";

export interface PartnersFormData {
  fullName: string;
  phone: string;
  email: string;
  partnershipType: string;
  audience: string;
  personalDataConsent: boolean;
}

interface SendEmailPayload {
  subject: string;
  body: string;
  to: string;
}

const escapeHtml = (text: string): string => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

const getPageUrl = () => (typeof window !== "undefined" ? window.location.href : "");

const buildHtmlBody = (rows: Array<[string, string]>) => {
  const content = rows
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}</strong> ${escapeHtml(String(value))}</p>`
    )
    .join("\n");
  return `<html><body>${content}</body></html>`;
};

export const emailService = {
  async sendPartnersForm(data: PartnersFormData): Promise<void> {
    const payload: SendEmailPayload = {
      subject: "[Заявка партнерської програми CreditUp]",
      to: PARTNERS_EMAIL,
      body: buildHtmlBody([
        ["Ім'я:", data.fullName],
        ["Телефон:", data.phone],
        ["Email:", data.email],
        ["Тип партнерства:", data.partnershipType],
        ["Аудиторія / опис:", data.audience],
        ["Згода на обробку персональних даних:", data.personalDataConsent ? "Так" : "Ні"],
        ["URL:", getPageUrl()],
      ]),
    };
    await api.post(ENDPOINT, payload);
  },
};
