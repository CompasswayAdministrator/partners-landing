import { useEffect, useRef } from "react";

import s from "./HowToJoin.module.scss";

const STEPS = [
  {
    num: "01",
    title: "Залиште заявку",
    text: (
      <>
        Заповніть коротку форму нижче або напишіть нам на{" "}
        <strong>partners@creditup.ua</strong>. Вкажіть ваш напрям діяльності та
        аудиторію.
      </>
    ),
  },
  {
    num: "02",
    title: "Підпишіть угоду",
    text: (
      <>
        Наш менеджер зв'яжеться з вами протягом 1 робочого дня. Ми узгодимо умови та
        надішлемо партнерську угоду на підписання.
      </>
    ),
  },
  {
    num: "03",
    title: "Отримайте доступ до кабінету",
    text: (
      <>
        Після підписання угоди ви отримаєте унікальне реферальне посилання, особистий
        кабінет із аналітикою та маркетинговий пакет.
      </>
    ),
  },
  {
    num: "04",
    title: "Рекомендуйте та заробляйте",
    text: (
      <>
        Розповідайте про CreditUp своїм клієнтам або аудиторії. Комісія нараховується
        автоматично і виплачується протягом 48 годин.
      </>
    ),
  },
];

const HowToJoin = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = stepsRef.current;
    if (!root) return;

    const steps = Array.from(root.querySelectorAll<HTMLElement>(`.${s.step}`));
    const timeouts: number[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const index = steps.indexOf(target);
          const t = window.setTimeout(
            () => target.classList.add(s.visible),
            Math.max(index, 0) * 120
          );
          timeouts.push(t);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    steps.forEach((step) => io.observe(step));

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      io.disconnect();
    };
  }, []);

  return (
    <section className={s.section} id="how">
      <div className={s.container}>
        <div className={s.label}>Кроки</div>
        <h2 className={s.title}>
          Як <em>приєднатись</em>
          <br />
          до програми
        </h2>
        <p className={s.sub}>Від реєстрації до першої виплати — лише 4 кроки.</p>
        <div className={s.steps} ref={stepsRef}>
          {STEPS.map(({ num, title, text }) => (
            <div key={num} className={s.step}>
              <div className={s.num}>{num}</div>
              <div className={s.body}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
