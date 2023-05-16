import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography, Divider, Card
} from '@mui/material';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import ReuseableCards from './ReuseableCards'
import { PowerSettingsNew } from '@mui/icons-material';
import CasinoIcon from '@mui/icons-material/Casino';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Settings from './Settings';
import LogsAndGraphs from './LogsAndGraphs.js/LogsAndGraphs';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

const FuelSystemBody = (props) => {
  const {sensor} = props
  console.log(sensor)
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant='h3' gutterBottom sx={{textAlign:'center'}}>{sensor.name}</Typography>
                <Typography variant="h5">Monitoring</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Door Status" status="CLOSE" Icon={<DoorFrontIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Gen Status" status="OFF" color="error" Icon={<PowerSettingsNew sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Temperature" status="50 °C" color="warning" Icon={<DeviceThermostatIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Fuel Level" status="0%" color="success" Icon={<LocalGasStationIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Tank Capacity" status="0.00 liters" color="info" Icon={<DoorFrontIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Tank Capacity" status="50 liters" color="warning" Icon={<DataThresholdingIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Battery (Device)" status="Stolen"  Icon={<BatteryChargingFullIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Battery (Generator)" status="Stolen" color="success"  Icon={<BatteryChargingFullIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Fuel Consumption" status="Hello Jee" color="warning"  Icon={<BatteryChargingFullIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Total Running Hours" status="Hello Jee " color="error"  Icon={<BatteryChargingFullIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
          
      </Grid>
      <Divider sx={{mt:'1rem'}} /> 
      <Settings /> 
      <Divider sx={{mt:'1rem'}} /> 
      <LogsAndGraphs />
    </>
      
  )
}

export default FuelSystemBody
