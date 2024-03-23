import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error
      // TODO до деплоя
      setTimeout(() => resolve(import("./ProfilePage")), 1500);
    }),
);
