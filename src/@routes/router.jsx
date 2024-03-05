import { createBrowserRouter } from "react-router-dom";
import { HOME_PATH, PRODUCTS_PATH, CATEGORIES_PATH } from "./constants";
import { Navbar } from "@components";

const router = createBrowserRouter([{
  path: HOME_PATH,
  element: <Navbar />,
  errorElement: Error,
  children: [
    // { index: true, element: <Navbar /> },
    // { path: PRODUCTS_PATH, element: <Navbar /> },
    // { path: CATEGORIES_PATH, element: <Navbar /> },
    // { path: '*', element:<Navbar />}
  ],
}]);

export default router;
