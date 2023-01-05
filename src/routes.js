import {Navigate, useRoutes} from 'react-router-dom'
import LandingPageLayout from './layouts/landingPage/LandingPageLayout'

export default function Router() {
    const routes = useRoutes([
        {
            path:'/',
            element: <LandingPageLayout /> 
        }

    ])
    return routes
}