import { Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomCards from './components/CustomCards'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PropaneIcon from '@mui/icons-material/Propane';
import Settings from './components/Settings';
import RecentAlerts from './components/RecentAlerts';
import Logs from './components/Logs'

const Body = (props) => {
  const {sensor} = props
  
  return (
    <div>
      <Container maxWidth='xl'>
        <Typography variant="h4" sx={{ m: 2, textAlign:'center' }}>
          {sensor.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCards title="Geyser Status" status={sensor.geyser_status === true ? ('On') : ('Off')} Icon={<PowerSettingsNewIcon sx={{fontSize:'2.5rem'}} />}/> 
        
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCards title="Source" status={sensor.supply_mode} color="warning" Icon={<WifiTetheringIcon sx={{fontSize:'2.5rem'}}/>}/> 
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCards title="Temperature" status={`${sensor.temperature} °C`} color="info" Icon={<DeviceThermostatIcon sx={{fontSize:'2.5rem'}} />}/> 
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCards title="Gas Valve" status={sensor.gas_valve === true ? ('Open') : ('Close')} color="error" Icon={<PropaneIcon sx={{fontSize:'2.5rem'}}/>}/> 
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <CustomCards title="Burner Status" status="OFF" color="info" Icon={<LocalFireDepartmentIcon sx={{fontSize:'2.5rem'}}/>}/> 
          </Grid> */}
          <Grid item xs={12} md={6} lg={8} >
           <Settings /> 
          </Grid>
          <Grid item xs={12} md={6} lg={4} >
            <RecentAlerts /> 
          </Grid>
          {/* <Grid item xs={12} md={6} lg={8} >
           <Logs 
           title="Website Visits"
           subheader="(+43%) than last year"
           chartLabels={[
             '01/01/2003',
             '02/01/2003',
             '03/01/2003',
             '04/01/2003',
             '05/01/2003',
             '06/01/2003',
             '07/01/2003',
             '08/01/2003',
             '09/01/2003',
             '10/01/2003',
             '11/01/2003',
           ]}
           chartData={[
             {
               name: 'Team A',
               type: 'column',
               fill: 'solid',
               data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
             },
             {
               name: 'Team B',
               type: 'area',
               fill: 'gradient',
               data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
             },
             {
               name: 'Team C',
               type: 'line',
               fill: 'solid',
               data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
             },
           ]}
           />
          </Grid> */}
        </Grid>
      </Container> 
    </div>
  )
}

export default Body
