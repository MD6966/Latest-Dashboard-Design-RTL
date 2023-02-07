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
import AdminModules from "./views/Admin/AdminModules/AdminModules";
import Geysital from "./views/Admin/AdminModules/components/Geysital/Geysital";
import Fuel from "./views/Admin/AdminModules/components/Fuel System/FuelSystem";
import Protogen from "./views/Admin/AdminModules/components/Protogen/Protogen";

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
      path: "admin",
      element: <AdminAuthLayout />,
      children: [{ path: "login", element: <AdminLoginPage /> }],
    },
    {
      path: "admin-dashboard",
      element: <AdminDashboard />,
      children: [
        { path: "all", element: <AdminModules /> },
        { path: "geysital", exact: true, element: <Geysital /> },
        { path: "fuel", exact: true, element: <Fuel /> },
        { path: "protogen", exact: true, element: <Protogen /> },
      ],
    },
  ]);
  return routes;
}
