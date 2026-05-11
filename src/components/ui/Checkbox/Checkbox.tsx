import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";

import s from "./Checkbox.module.scss";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...rest }, ref) => (
    <div className={clsx(s.wrapper, className)}>
      <label className={s.label} htmlFor={id}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={s.input}
          aria-invalid={!!error}
          {...rest}
        />
        <span className={clsx(s.box, error && s.boxError)}>
          <Check className={s.check} size={14} strokeWidth={3} />
        </span>
        <span className={s.text}>{label}</span>
      </label>
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
