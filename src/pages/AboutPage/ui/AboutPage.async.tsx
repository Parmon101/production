import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error
  // TODO до деплоя
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
