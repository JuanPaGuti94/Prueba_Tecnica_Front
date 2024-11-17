import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/app.layout";
import { HomePage } from "../pages/home/home.component";
import { OrdersPage } from "../pages/orders/orders.component";
import { ProductosPage } from "../pages/product/products.component";
export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="products" element={<ProductosPage/>} />
        <Route path="orders" element={<OrdersPage/>} />
      </Route>
    </Routes>
  );
};
