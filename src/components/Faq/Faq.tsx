import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import s from "./Faq.module.scss";

const ITEMS = [
  {
    q: "Скільки я можу заробити як партнер?",
    a: "Базова ставка комісії — 5% від суми виданого кредиту. При досягненні певних обсягів ставка зростає до 10%. Середній кредит CreditUp — 40 000 грн, отже одна успішна заявка приносить вам від 2 000 грн.",
  },
  {
    q: "Коли і як виплачується комісія?",
    a: "Комісія нараховується автоматично після видачі кредиту та виплачується протягом 48 годин на вашу картку або рахунок ФОП. Усі виплати відображаються в особистому кабінеті.",
  },
  {
    q: "Чи потрібно бути юридичною особою?",
    a: "Ні. Партнером може стати як ФОП, так і фізична особа. Умови співпраці та форма виплат узгоджуються індивідуально з кожним партнером.",
  },
  {
    q: "Скільки часу займає підключення?",
    a: "Від подачі заявки до отримання реферального посилання проходить не більше 2 робочих днів. Менеджер зв'яжеться з вами протягом 1 дня після заявки.",
  },
  {
    q: "Як відстежувати мої реферали та виплати?",
    a: "Усі дані — кліки, заявки, конверсії та виплати — доступні в реальному часі в особистому партнерському кабінеті. Додатково ви отримуєте email-сповіщення про кожну нову конверсію.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  const toggle = (i: number) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <section className={s.section} id="faq">
      <div className={s.container}>
        <div className={s.label}>Питання та відповіді</div>
        <h2 className={s.title}>
          <span className={s.srOnly}>Питання та відповіді — </span>
          <em>FAQ</em>
        </h2>
        <p className={s.sub}>Відповіді на найпоширеніші питання про партнерську програму.</p>
        <div className={s.list}>
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const questionId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <div key={item.q} className={`${s.item} ${isOpen ? s.open : ""}`}>
                <button
                  type="button"
                  id={questionId}
                  className={s.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {item.q}
                  <span className={s.arrow}>
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={questionId}
                  className={s.answer}
                  hidden={!isOpen}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
