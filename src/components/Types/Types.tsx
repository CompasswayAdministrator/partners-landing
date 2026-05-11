import { Check } from "lucide-react";

import s from "./Types.module.scss";

interface TypeCard {
  badge: string;
  title: string;
  text: string;
  bullets: string[];
}

const CARDS: TypeCard[] = [
  {
    badge: "Бізнес",
    title: "Освітні агентства",
    text: "Допомагаєте студентам вступити до університетів? Додайте CreditUp до свого портфоліо послуг і збільшіть дохід із кожного клієнта.",
    bullets: [
      "Ексклюзивні умови для агентств",
      "Спільні маркетингові акції",
      "Пріоритетна підтримка клієнтів",
    ],
  },
  {
    badge: "Медіа",
    title: "Блогери та інфлюенсери",
    text: "Маєте аудиторію студентів або батьків? Монетизуйте контент про навчання за кордоном, рекомендуючи CreditUp.",
    bullets: [
      "Унікальне реферальне посилання",
      "Готовий контент для публікацій",
      "Бонуси за перші 10 рефералів",
    ],
  },
  {
    badge: "Платформи",
    title: "Освітні платформи та портали",
    text: "Якщо у вас сайт або застосунок для абітурієнтів — інтегруйте партнерський блок і заробляйте пасивно.",
    bullets: [
      "API та віджет-інтеграція",
      "White-label рішення",
      "Технічна підтримка інтеграції",
    ],
  },
  {
    badge: "Консалтинг",
    title: "Консультанти та коучи",
    text: "Допомагаєте людям з кар'єрою або переїздом? Рекомендуйте CreditUp і отримуйте виплати без жодних зусиль.",
    bullets: [
      "Проста реєстрація за 5 хвилин",
      "Особистий дашборд зі статистикою",
      "Виплати на картку або рахунок ФОП",
    ],
  },
];

const Types = () => (
  <section className={s.section} id="types">
    <div className={s.container}>
      <div className={s.label}>Кому підходить</div>
      <h2 className={s.title}>
        Для кого{" "}
        <em>
          партнерська
          <br />
          програма
        </em>
      </h2>
      <p className={s.sub}>
        Програма відкрита для будь-кого, хто має аудиторію або клієнтів, зацікавлених
        у навчанні в Україні та за кордоном.
      </p>
      <div className={s.grid}>
        {CARDS.map(({ badge, title, text, bullets }) => (
          <div key={title} className={s.card}>
            <div className={s.badge}>{badge}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul className={s.bullets}>
              {bullets.map((b) => (
                <li key={b}>
                  <Check size={16} className={s.bulletIcon} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Types;
