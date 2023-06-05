import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import OurShop from "../Pages/OurShop/OurShop";
import Dashboard from "../Component/Dashboard/Dashboard";
import MyCart from "../Component/Dashboard/Cart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Component/Dashboard/AllUsers/AllUsers";
import AddItem from "../Component/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Component/Dashboard/ManageItems/ManageItems";

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
      {
        path:"/shop",
        element: <OurShop></OurShop>
      },
     
    ],
    
  },
  {
    path:"/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'my-cart',
        element:<MyCart></MyCart>,

      },
        {
          path:'all-users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
  
        },
        {
          path:'add-item',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>,
        },
        {
          path:'manage-items',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
        }
      

    ],
  }
]);
export default router;
