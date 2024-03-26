import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error
      // TODO до деплоя
      setTimeout(() => resolve(import("./ArticlesPage")), 1500);
    }),
);
