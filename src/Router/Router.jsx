import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";
import Dashboard from "../Dashbord/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
