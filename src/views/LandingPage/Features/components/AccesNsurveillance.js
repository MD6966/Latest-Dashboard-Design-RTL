import React from 'react'
import CustomTabsComponent from './CustomTabsComponent'
import {AnPSyestem, OTS, GsSystem, DashboardOffer} from '../components/data/A&SData'


const AccesNsurveillance = () => {
  
  return (
    <div>
    <CustomTabsComponent data={AnPSyestem} 
        title={'ACCESS & PRESENCE MONITORING SYSTEM'} 
        image={'/assets/images/Access-Presence-Monitoring-System-1.webp'}
        direction={'ltr'}
       
        />
        <CustomTabsComponent data={OTS} 
        title={'OBJECT TRACKING SYSTEM'} 
        image={'/assets/images/Object-Tracking-System-2.webp'}
        direction={'rtl'}
        />
        <CustomTabsComponent data={GsSystem} 
        title={'GENERAL SURVEILLANCE SYSTEM'} 
        image={'/assets/images/General-Surveillance-System-2.webp'}
        direction={'ltr'}
        /> 
         <CustomTabsComponent data={DashboardOffer} 
        title={'Our Dashboard Offers'} 
        image={'/assets/images/about-motivation.webp' }
        direction={'rtl'}
        />
    </div>
  )
}

export default AccesNsurveillance
