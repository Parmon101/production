import React from 'react';
import s from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames";
interface NavbarProps {
  className?: string;
}
export const Navbar = ({className}:NavbarProps) => {
  return (
    <div className={classNames(s.navbar,{},[className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={s.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={s.aboutLink}>
        О сайте
      </AppLink>
    </div>
  );
};
