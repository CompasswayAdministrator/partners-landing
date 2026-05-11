import { Target, Handshake, Globe, Lock } from "lucide-react";

import s from "./Mission.module.scss";

const PILLARS = [
  {
    Icon: Target,
    title: "Доступність",
    text: "Мінімум документів, максимум швидкості — рішення за 15 хвилин",
  },
  {
    Icon: Handshake,
    title: "Партнерство",
    text: "Будуємо екосистему, де студенти, навчальні заклади та партнери виграють разом",
  },
  {
    Icon: Globe,
    title: "Можливості",
    text: "Від курсів в Україні до університетів Європи — фінансуємо будь-який освітній шлях",
  },
  {
    Icon: Lock,
    title: "Прозорість",
    text: "Жодних прихованих платежів — умови фіксуються в договорі з першого дня",
  },
];

const Mission = () => (
  <section className={s.section} id="mission">
    <div className={s.container}>
      <div className={s.label}>Наша місія</div>
      <h2 className={s.title}>
        Зробити освіту
        <br />
        <em>доступною для кожного</em>
      </h2>
      <p className={s.lead}>
        CreditUp вірить: фінансові обставини не повинні бути перепоною на шляху до
        знань. Ми спрощуємо доступ до якісної освіти — в Україні та за кордоном —
        надаючи прозорі, швидкі й зручні освітні кредити.
      </p>
      <div className={s.pillars}>
        {PILLARS.map(({ Icon, title, text }) => (
          <div key={title} className={s.pillar}>
            <Icon className={s.pillarIcon} size={28} />
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;
