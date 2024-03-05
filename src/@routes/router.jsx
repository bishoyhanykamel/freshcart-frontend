import { createBrowserRouter } from "react-router-dom";
import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  // PRODUCTS_PATH,
  // CATEGORIES_PATH,
  // CART_PATH,
} from "./constants";
import { MainLayout, Home, Login, Register, NotFound } from "@pages";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <MainLayout />,
    // errorElement: Error,
    children: [
      { index: true, element: <Home /> },
      { path: LOGIN_PATH, element: <Login /> },
      { path: REGISTER_PATH, element: <Register /> },
      // { path: PRODUCTS_PATH, element: <Products /> },
      // { path: CATEGORIES_PATH, element: <Categories /> },
      // { path: CART_PATH, element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
