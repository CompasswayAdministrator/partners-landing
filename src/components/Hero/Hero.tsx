import { Fragment } from "react";

import Button from "@components/ui/Button/Button";

import s from "./Hero.module.scss";

const STATS = [
  { num: "До", highlight: " 10%", label: "комісія за кожен кредит" },
  { num: "48", highlight: "год", label: "середній час виплати" },
  { num: "7", highlight: "+", label: "країн фінансування" },
  { num: "10", highlight: "K+", label: "учнів вже навчаються" },
];

const Hero = () => (
  <section className={s.hero}>
    <div className={s.bg} />
    <div className={s.inner}>
      <div className={s.badge}>Партнерська програма CreditUp</div>
      <h1 className={s.title}>
        Заробляйте
        <br />
        разом із <em>CreditUp</em>
      </h1>
      <p className={s.sub}>
        Приєднуйтесь до партнерської мережі провідного фінтех-сервісу освітнього
        кредитування в Україні. Рекомендуйте — отримуйте винагороду.
      </p>
      <div className={s.actions}>
        <Button as="a" href="#contact" variant="primary">
          Подати заявку
        </Button>
        <Button as="a" href="#about" variant="outline">
          Дізнатись більше
        </Button>
      </div>
      <div className={s.stats}>
        {STATS.map((stat, i) => (
          <Fragment key={stat.label}>
            <div className={s.stat}>
              <div className={s.statNum}>
                {stat.num}
                <span>{stat.highlight}</span>
              </div>
              <div className={s.statLabel}>{stat.label}</div>
            </div>
            {i < STATS.length - 1 && <div className={s.statDivider} />}
          </Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
