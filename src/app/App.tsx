import React, { Suspense } from "react";
import { Navbar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

function App() {
  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
