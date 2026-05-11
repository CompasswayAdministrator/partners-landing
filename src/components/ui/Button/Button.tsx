import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

import s from "./Button.module.scss";

type Variant = "primary" | "outline" | "nav-cta" | "submit";

interface CommonProps {
  variant?: Variant;
  className?: string;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type Props = ButtonProps | LinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant = "primary", className, ...rest }, ref) => {
    const classes = clsx(s.btn, s[variant], className);

    if (rest.as === "a") {
      const { as: _as, ...anchorProps } = rest;
      void _as;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        />
      );
    }

    const { as: _as, ...btnProps } = rest as ButtonProps;
    void _as;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...btnProps}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
