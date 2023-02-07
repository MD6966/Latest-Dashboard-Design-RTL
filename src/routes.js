import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "./layouts/auth/AuthLayout/AuthLayout";
import Dashboard from "./layouts/Dashboard/Dashboard";
import LandingPageLayout from "./layouts/landingPage/LandingPageLayout";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import WaterTankSystem from "./views/WaterTankSystem/WaterTankSystem";
import FuelMonitoringSystem from "./views/FuelMonitoringSystem";
import HybridGeyserOverview from "./views/HybridGeyserOverview/HybridGeyserOverview";
import AllModules from "./views/FuelMonitoringSystem/components/AllModulesPage/AllModules";
import { AdminAuthLayout } from "./layouts/Admin/adminAuth";
import { AdminLoginPage } from "./views/Admin";
import AdminDashboard from "./layouts/Admin/Dashboard/Dashboard";
import Users from "./views/Admin/components/Users";
import Modules from "./views/Admin/components/Modules";
import Complaints from "./views/Admin/components/complaints/Complaints";
import Email from "./views/Admin/components/Email/Email";
import RegisterAdminSide from "./views/Admin/components/Register";



export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPageLayout />,
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      element: <ProtectedRoutes isLogged={true} />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            // {element: <Navigate to="/" />, index: true},
            { path: "geyser_hybrid", element: <HybridGeyserOverview /> },
            { path: "tank", element: <WaterTankSystem /> },
            { path: "fuel", element: <FuelMonitoringSystem /> },
            { path: "fuel-modules", element: <AllModules /> },
          ],
        },
      ],
    },
    {
      path: "auth/admin",
      element: <AdminAuthLayout />,
      children: [{ path: "login", element: <AdminLoginPage /> }],
    },
    {
      path: "admin",
      element: <AdminDashboard />,
      children: [
        {path:'users', element:<Users /> },
        {path:'modules', element:<Modules /> },
        {path:'complaints', element:<Complaints /> },
        {path:'email', element:<Email /> },
        {path:'register', element:<RegisterAdminSide /> },


      ],
    },
  ]);
  return routes;
}
