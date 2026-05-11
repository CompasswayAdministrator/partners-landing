import {
  BadgeDollarSign,
  BarChart3,
  Handshake,
  type LucideIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";

import s from "./Benefits.module.scss";

interface BenefitCard {
  Icon: LucideIcon;
  iconBg: "green" | "orange" | "blue";
  title: string;
  text: string;
  orangeAccent?: boolean;
  wide?: boolean;
}

const CARDS: BenefitCard[] = [
  {
    Icon: BadgeDollarSign,
    iconBg: "green",
    title: "Висока комісія",
    text: "До 10% від суми кожного виданого кредиту. Чим більше рефералів — тим вища ваша персональна ставка за нашою шкалою лояльності.",
  },
  {
    Icon: Zap,
    iconBg: "orange",
    orangeAccent: true,
    title: "Швидкі виплати",
    text: "Комісія нараховується автоматично та виплачується протягом 48 годин після успішної видачі кредиту вашому рефералу.",
  },
  {
    Icon: BarChart3,
    iconBg: "green",
    title: "Особистий кабінет",
    text: "Відстежуйте кліки, заявки та виплати в режимі реального часу через зручний партнерський дашборд із детальною аналітикою.",
  },
  {
    Icon: Handshake,
    iconBg: "orange",
    orangeAccent: true,
    title: "Персональний менеджер",
    text: "Кожен партнер отримує закріпленого менеджера, який допомагає з питаннями, стратегіями та виплатами.",
  },
  {
    Icon: ShieldCheck,
    iconBg: "green",
    wide: true,
    title: "Прозорі умови",
    text: "Без прихованих комісій і складних схем. Партнерська угода фіксує всі умови роботи — чесно й відкрито.",
  },
];

const Benefits = () => (
  <section className={s.section} id="benefits">
    <div className={s.container}>
      <div className={s.label}>Переваги</div>
      <h2 className={s.title}>
        Чому обирають
        <br />
        <em>CreditUp</em>
      </h2>
      <p className={s.sub}>
        Ми створили програму, яка вигідна обом сторонам — вашим клієнтам і вам.
      </p>
      <div className={s.grid}>
        {CARDS.map(({ Icon, iconBg, title, text, orangeAccent, wide }) => (
          <div
            key={title}
            className={`${s.card} ${orangeAccent ? s.orangeAccent : ""} ${wide ? s.wide : ""}`}
          >
            <div className={`${s.icon} ${s[`bg-${iconBg}`]}`}>
              <Icon size={26} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
