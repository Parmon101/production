import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={s.links}
        onClick={onToggleModal}
      />
      {t("Войти")}
      <div />
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t(
          "Тестовый пример для модалки. Тестовый пример для модалки .Тестовый пример для модалки  ",
        )}
      </Modal>
    </div>
  );
};
