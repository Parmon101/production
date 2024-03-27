import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import s from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = ({
  className,
}: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(s.ArticleImageBlockComponent, {}, [className])}
    />
  );
};
