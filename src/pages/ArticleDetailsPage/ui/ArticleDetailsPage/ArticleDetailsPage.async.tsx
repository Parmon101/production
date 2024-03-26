import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error
      // TODO до деплоя
      setTimeout(() => resolve(import("./ArticleDetailsPage")), 1500);
    }),
);
