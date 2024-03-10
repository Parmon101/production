import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // TODO до деплоя
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))
