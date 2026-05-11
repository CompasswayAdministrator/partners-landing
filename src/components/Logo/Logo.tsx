import clsx from "clsx";

import { CREDITUP_HOMEPAGE_URL } from "@config/env";

import s from "./Logo.module.scss";

interface LogoProps {
    className?: string;
    href?: string;
}

const Logo = ({ className, href = CREDITUP_HOMEPAGE_URL }: LogoProps) => (
    <a href={href} className={clsx(s.logo, className)}>
        Credit<span>Up</span>
    </a>
);

export default Logo;
