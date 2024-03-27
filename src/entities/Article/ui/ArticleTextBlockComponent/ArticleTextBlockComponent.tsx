import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import s from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = ({
  className,
}: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.ArticleTextBlockComponent, {}, [className])} />
  );
};
