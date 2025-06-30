import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/authPages/Login/Login";
import Register from "../pages/authPages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Coverage from "../pages/Coverage/Coverage";
import AddParcelForm from "../pages/AddParcelForm/AddParcelForm";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ParcelTable from "../pages/Dashboard/ParcelTable";
import MyPayments from "../pages/Dashboard/MyPayments";
import ErrorPage from "../components/Shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
        errorElement: <ErrorPage />,

    children: [
      { index: true, Component: Home },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            <AddParcelForm></AddParcelForm>
          </PrivateRoute>
        ),
      },

      {
        path: "/coverage",
        element: (
          <PrivateRoute>
            <Coverage></Coverage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
        errorElement: <ErrorPage />,

    children: [
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
        errorElement: <ErrorPage />,

    children: [
      { index: true, Component: DashboardHome },
      { path: "/dashboard/myParcel", Component: ParcelTable },
      { path: "/dashboard/myPayments", Component: MyPayments },
    ],
  },
]);
