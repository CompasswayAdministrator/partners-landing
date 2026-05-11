import Logo from "@components/Logo/Logo";
import { PRIVACY_POLICY_URL } from "@config/env";

import s from "./Footer.module.scss";

const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className={s.footer}>
    <Logo className={s.logo} />
    <p>
      © {YEAR} CreditUp.ua — Освітнє кредитування онлайн.
      <br />
      Усі права захищено.{" "}
      <a href={PRIVACY_POLICY_URL}>Політика конфіденційності</a>
    </p>
  </footer>
);

export default Footer;
