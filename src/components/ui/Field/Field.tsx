import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";

import s from "./Field.module.scss";

interface FieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

const Field = ({ label, htmlFor, error, children, className }: FieldProps) => {
  const errorId = htmlFor && error ? `${htmlFor}-error` : undefined;

  const enhanced =
    isValidElement(children) && htmlFor
      ? cloneElement(children as ReactElement<Record<string, unknown>>, {
          "aria-invalid": error ? true : undefined,
          "aria-describedby": errorId,
        })
      : children;

  return (
    <div className={clsx(s.group, className)}>
      <label className={s.label} htmlFor={htmlFor}>
        {label}
      </label>
      {enhanced}
      {error && (
        <span className={s.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default Field;
