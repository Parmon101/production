import React from 'react';
import s from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
interface NavbarProps {
  className?: string;
}
export const Navbar = ({className}:NavbarProps) => {
  return (
    <div className={s.links}>
      <ThemeSwitcher className={'asdsd'}/>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={s.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={s.aboutLink}>
        О сайте
      </AppLink>
    </div>
  );
};

