import { GraduationCap, Globe, CalendarRange, Wallet } from "lucide-react";

import Button from "@components/ui/Button/Button";

import s from "./About.module.scss";

const STATS = [
  {
    Icon: GraduationCap,
    accent: "green" as const,
    title: "10 000+",
    text: "учнів вже отримали фінансування",
  },
  {
    Icon: Globe,
    accent: "green" as const,
    title: "7 країн",
    text: "Україна, Польща, Чехія, Німеччина, Австрія, Словаччина, Канада",
  },
  {
    Icon: CalendarRange,
    accent: "orange" as const,
    title: "3 – 36 міс",
    text: "гнучкий термін кредиту",
  },
  {
    Icon: Wallet,
    accent: "orange" as const,
    title: "від ₴100 000",
    text: "сума фінансування",
  },
];

const About = () => (
  <section className={s.section} id="about">
    <div className={s.container}>
      <div className={s.grid}>
        <div className={s.text}>
          <div className={s.label}>Про програму</div>
          <h2 className={s.title}>
            CreditUp — ваш
            <br />
            <em>надійний партнер</em>
          </h2>
          <p>
            <strong>CreditUp.ua</strong> — провідний онлайн-сервіс освітнього
            кредитування. Ми фінансуємо <strong>академічну освіту</strong>{" "}
            (університети та коледжі), <strong>професійні курси</strong> (IT,
            маркетинг, дизайн тощо) та <strong>мовні курси</strong> — як в Україні,
            так і за кордоном.
          </p>
          <p>
            Підтримувані країни:{" "}
            <strong>
              🇺🇦 Україна, 🇵🇱 Польща, 🇨🇿 Чехія, 🇩🇪 Німеччина, 🇦🇹 Австрія, 🇸🇰
              Словаччина, 🇨🇦 Канада
            </strong>
            .
          </p>
          <p>
            Наша партнерська програма дозволяє{" "}
            <strong>агентствам, блогерам, освітнім платформам та консультантам</strong>{" "}
            монетизувати свою аудиторію, пропонуючи реальний і корисний продукт.
          </p>
          <Button as="a" href="#contact" variant="primary" className={s.cta}>
            Приєднатись зараз
          </Button>
        </div>
        <div className={s.visual}>
          <div className={s.miniList}>
            {STATS.map(({ Icon, accent, title, text }) => (
              <div key={title} className={s.miniItem}>
                <div className={`${s.miniIcon} ${s[accent]}`}>
                  <Icon size={22} />
                </div>
                <div className={s.miniText}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
