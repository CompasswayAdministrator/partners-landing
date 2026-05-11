import { useEffect, useId, useRef, useState } from "react";
import { Phone, MessageCircle, Mail, UserRound, X } from "lucide-react";

import s from "./ManagerWidget.module.scss";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ManagerWidget = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const previousFocus = document.activeElement as HTMLElement | null;

    closeBtnRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !boxRef.current) return;

      const focusable = boxRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={s.floatBtn}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Зв'язатись із менеджером"
      >
        <span className={s.dot} aria-hidden />
        <UserRound size={18} />
        <span>Зв'язатись із менеджером</span>
      </button>

      {open && (
        <div
          className={s.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={boxRef}
            className={s.box}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className={s.close}
              onClick={() => setOpen(false)}
              aria-label="Закрити"
            >
              <X size={16} />
            </button>
            <div className={s.avatar}>
              <UserRound size={36} />
            </div>
            <h3 id={titleId}>Тетяна</h3>
            <div className={s.role}>Менеджер із партнерства CreditUp</div>
            <p>
              Маєте питання щодо партнерської програми? Я допоможу вам розібратись з
              умовами, підключенням та першими кроками.
            </p>
            <div className={s.contacts}>
              <a href="tel:+380738203432" className={`${s.link} ${s.linkGreen}`}>
                <Phone size={18} />
                <span>+38 073 820 34 32</span>
              </a>
              <a
                href="https://t.me/creditup_partners"
                target="_blank"
                rel="noreferrer"
                className={s.link}
              >
                <MessageCircle size={18} />
                <span>Написати в Telegram</span>
              </a>
              <a href="mailto:partners@creditup.ua" className={s.link}>
                <Mail size={18} />
                <span>partners@creditup.ua</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagerWidget;
