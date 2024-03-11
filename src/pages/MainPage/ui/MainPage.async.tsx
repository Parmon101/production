import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error
  // TODO до деплоя
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
