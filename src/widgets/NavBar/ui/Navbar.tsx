import React from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const t = useTranslation();

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>
        {t("Главная")}
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/about"
        className={s.aboutLink}
      >
        {t("О сайте")}
      </AppLink>
    </div>
  );
};
