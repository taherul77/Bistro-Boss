import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
    ],
  },
]);
export default router;
