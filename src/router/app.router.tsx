import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/app.layout";
import { HomePage } from "../pages/home/home.component";
export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  );
};
