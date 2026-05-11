import { lazy, Suspense } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

import s from "./Contact.module.scss";

const PartnersForm = lazy(() => import("@components/PartnersForm/PartnersForm"));

const CHANNELS = [
  {
    Icon: Mail,
    accent: "green" as const,
    href: "mailto:partners@creditup.ua",
    target: undefined,
    title: "partners@creditup.ua",
    subtitle: "Для партнерських запитів",
  },
  {
    Icon: Phone,
    accent: "orange" as const,
    href: "tel:0800207613",
    target: undefined,
    title: "0 800 207 613",
    subtitle: "Безкоштовно по Україні",
  },
  {
    Icon: MessageCircle,
    accent: "blue" as const,
    href: "https://t.me/creditup_partners",
    target: "_blank" as const,
    title: "@creditup_partners",
    subtitle: "Telegram — відповідаємо швидко",
  },
];

const FormFallback = () => (
  <div className={s.formFallback} aria-hidden>
    Завантаження…
  </div>
);

const Contact = () => (
  <section className={s.section} id="contact">
    <div className={s.container}>
      <div className={s.wrap}>
        <div className={s.info}>
          <div className={s.label}>Контакти</div>
          <h2 className={s.title}>
            Готові
            <br />
            <em>розпочати?</em>
          </h2>
          <p className={s.lead}>
            Залиште заявку або зв'яжіться з нами зручним способом. Наш менеджер
            відповість протягом 1 робочого дня.
          </p>
          <div className={s.channels}>
            {CHANNELS.map(({ Icon, accent, href, target, title, subtitle }) => (
              <a
                key={href}
                href={href}
                target={target}
                rel={target === "_blank" ? "noreferrer" : undefined}
                className={s.channel}
              >
                <div className={`${s.channelIcon} ${s[accent]}`}>
                  <Icon size={20} />
                </div>
                <div className={s.channelText}>
                  <strong>{title}</strong>
                  <span>{subtitle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Suspense fallback={<FormFallback />}>
          <PartnersForm />
        </Suspense>
      </div>
    </div>
  </section>
);

export default Contact;
