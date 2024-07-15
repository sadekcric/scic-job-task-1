import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../Dashbord/User/User";
import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <User />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
