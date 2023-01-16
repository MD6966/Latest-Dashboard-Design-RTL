import React from 'react'
import CustomTabsComponent from './CustomTabsComponent'
import {EnvMS,MVMS,CMS,EMS,MAMS,FMS,RSMS,CBMS,DashboardOffer} from './data/IND'
const Industrial = () => {
  return (
    <div>
      <CustomTabsComponent data={EnvMS} 
        title={'ENVIRONMENTAL MONITORING SYSTEM'} 
        image={'/assets/images/Environmental-Monitoring-System-1-1.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={MVMS} 
        title={'MACHINE VISUAL MONITORING SYSTEM'} 
        image={'/assets/images/Machine-1.webp'}
        direction={'rtl'}
        />
        <CustomTabsComponent data={CMS} 
        title={'COLD CHAIN MONITORING SYSTEM SYSTEM'} 
        image={'/assets/images/Cold-Chain-Monitoring-System-2-min.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={EMS} 
        title={'ELECTRICAL MONITORING SYSTEM'} 
        image={'/assets/images/Electrical-3.webp'}
        direction={'rtl'}
        />
        <CustomTabsComponent data={MAMS} 
        title={'MOTOR & PUMP AGING MONITORING SYSTEM'} 
        image={'/assets/images/Motor-2.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={FMS} 
        title={'FUEL & GENSET MONITORING SYSTEM'} 
        image={'/assets/images/Fuel-1.webp'}
        direction={'rtl'}
        />
        <CustomTabsComponent data={RSMS} 
        title={'REMOTE SITE MONITORING SYSTEM'} 
        image={'/assets/images/Remote-1.webp'}
        direction={'ltr'}
        />
        <CustomTabsComponent data={CBMS} 
        title={'COLLECTION BOX MONITORING SYSTEM'} 
        image={'/assets/images/Collection-2.webp'}
        direction={'rtl'}
        />
         <CustomTabsComponent data={DashboardOffer} 
        title={'Our Dashboard Offers'} 
        image={'/assets/images/about-motivation.webp' }
        direction={'ltr'} />
    </div>
  )
}

export default Industrial
