import Logo from "@components/Logo/Logo";
import Button from "@components/ui/Button/Button";

import s from "./Nav.module.scss";

const NAV_LINKS = [
  { href: "#about", label: "Про програму" },
  { href: "#benefits", label: "Переваги" },
  { href: "#how", label: "Як приєднатись" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакти" },
];

const Nav = () => (
  <nav className={s.nav}>
    <Logo />
    <ul className={s.list}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
    <Button as="a" href="#contact" variant="nav-cta">
      Стати партнером
    </Button>
  </nav>
);

export default Nav;
