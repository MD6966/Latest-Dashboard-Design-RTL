import React from 'react'
import CustomTabsComponent from './CustomTabsComponent'
import {AMS,FFMS,DashboardOffer} from './data/A&F'
const AgricultureNfishery = () => {
  return (
    <div>
      <CustomTabsComponent data={AMS} 
        title={'AGRICULTURE MONITORING SYSTEM'} 
        image={'/assets/images/Agriculture-2.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={FFMS} 
        title={'FISH FARM MONITORING SYSTEM'} 
        image={'/assets/images/Fish-Farm-Monitoring-System-1-min.webp'}
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

export default AgricultureNfishery
