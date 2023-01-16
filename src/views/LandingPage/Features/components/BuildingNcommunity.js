import React from 'react'
import CustomTabsComponent from './CustomTabsComponent'
import {BAS,ECS, BGAS,WTS, STCS, TWMS,DashboardOffer} from './data/B&C'

const BuildingNcommunity = () => {
  return (
    <div>
       <CustomTabsComponent data={BAS} 
        title={'BUILDING AUTOMATION SYSTEM'} 
        image={'/assets/images/Building-Automation-System-5-min.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={ECS} 
        title={'ENERGY CONSERVATION SYSTEM'} 
        image={'/assets/images/Energy-Conservation-System-1-min.webp'}
        direction={'rtl'}
        />
         <CustomTabsComponent data={BGAS} 
        title={'BARRIER AND GATE AUTOMATION SYSTEMESS & PRESENCE MONITORING SYSTEM'} 
        image={'/assets/images/Barrier-And-Gate-Automation-1-min.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={WTS} 
        title={'WATER TANK MONITORING SYSTEM'} 
        image={'/assets/images/Water-Tank-Monitoring-System-1-min.webp'}
        direction={'rtl'}
        />
         <CustomTabsComponent data={STCS} 
        title={'STREET LIGHTS CONTROL SYSTEM'} 
        image={'/assets/images/Street-Lights-Control-System-1-min.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={TWMS} 
        title={'TUBE-WELL MONITORING SYSTEM'} 
        image={'/assets/images/Tube-Well-Monitoring-System-2-min.webp'}
        direction={'rtl'}
        />
        <CustomTabsComponent data={DashboardOffer} 
        title={'OUR DASHBOARD OFFERS'} 
        image={'/assets/images/about-motivation.webp'}
        direction={'ltr'}
        />

    </div>
  )
}

export default BuildingNcommunity
