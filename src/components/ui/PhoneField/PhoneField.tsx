import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

interface PhoneFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: boolean;
}

const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
  ({ error, className, placeholder = "+380 67 000 0000", ...rest }, ref) => (
    <input
      ref={ref}
      type="tel"
      placeholder={placeholder}
      autoComplete="tel"
      className={clsx("field-control", error && "field-control--error", className)}
      {...rest}
    />
  )
);

PhoneField.displayName = "PhoneField";

export default PhoneField;
