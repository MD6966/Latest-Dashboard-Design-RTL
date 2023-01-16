import {Navigate, useRoutes} from 'react-router-dom'
import AuthLayout from './layouts/auth/AuthLayout/AuthLayout'
import Dashboard from './layouts/Dashboard/Dashboard'
import LandingPageLayout from './layouts/landingPage/LandingPageLayout'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import WaterTankSystem from './views/WaterTankSystem/WaterTankSystem'
import FuelMonitoringSystem from './views/FuelMonitoringSystem'
import HybridGeyserOverview from './views/HybridGeyserOverview/HybridGeyserOverview'

export default function Router() {
    const routes = useRoutes([
        {
            path:'/',
            element: <LandingPageLayout /> 
        },
        {path:'auth', element: <AuthLayout />,
        children:[
            {element: <Navigate to="/" />, index: true},
            {path:'login', element:<Login />},
            {path:'register', element:<Register />},

        ]
    },
    {element: <ProtectedRoutes isLogged={true}/>, children:[
            {path:'dashboard', element: <Dashboard />, 
            children:[
            // {element: <Navigate to="/" />, index: true},
            {path:'geyser_hybrid', element:<HybridGeyserOverview />},
            {path:'tank', element:<WaterTankSystem />},
            {path:'fuel', element:<FuelMonitoringSystem />},

            
            
        ]} 
    ]},
   

    ])
    return routes
}