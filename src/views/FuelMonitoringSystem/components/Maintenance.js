import { AppBar, Grid, Tab, Tabs, Toolbar } from '@mui/material'
import React from 'react'
import LogMaintenance from './LogMaintenance'
import MaintenaceCard from './MaintenaceCard'
import MaintenanceThreshold from './MaintenanceThreshold'
import OilChangeThreshold from './OilChangeThreshold'
import PerfromOilChange from './PerfromOilChange'

const Maintenance = () => {
  const [value, setValue] = React.useState(0)
  const handleChange= (e, value) => {
        setValue(value)
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} xl={12}>
          <AppBar sx={{position:'sticky', height:'50px', bgcolor:'#D0F2FF'  }}> 
            <Tabs
            centered
            value={value}
            onChange={handleChange}
            >
              <Tab label='Running Time' value={0}/>
              <Tab label='Settings' value={1}/>

            </Tabs>
          </AppBar>
      </Grid>
      {value ===0 && <>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <MaintenaceCard title="Total Running Time" status="0.00 mins" />  
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <MaintenaceCard title="Running Time After Last Maintenace" status="0.00 mins" />  
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <MaintenaceCard title="Running Time After Last oil change" status="0.00 mins" />  
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <MaintenaceCard title="Running Time After Last Maintenace" status="0.00 mins" />  
      </Grid>
      </>}
      {value===1 && <>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <OilChangeThreshold />  
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <MaintenanceThreshold />  
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <LogMaintenance />  
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <PerfromOilChange />  
      </Grid>
      
      </>}
     
    </Grid>
  )
}

export default Maintenance
