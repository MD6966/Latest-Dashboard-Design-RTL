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
import Settings from './Settings';
import LogsAndGraphs from './LogsAndGraphs.js/LogsAndGraphs';

const FuelSystemBody = () => {
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Monitoring</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Fuel Tank Lid" status="CLOSE" Icon={<DoorFrontIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Gen Status" status="OFF" color="error" Icon={<PowerSettingsNew sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Gen Mode" status="MANUAL" color="warning" Icon={<CasinoIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Tank Fill Level" status="0%" color="success" Icon={<LocalGasStationIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Available Liters" status="0.00 liters" color="info" Icon={<DoorFrontIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Tank Capacity" status="50 liters" color="warning" Icon={<LocalGasStationIcon sx={{fontSize:'1.5rem'}} />}/> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
            <ReuseableCards title="Fuel Tank Lid" status="Close"  Icon={<DoorFrontIcon sx={{fontSize:'1.5rem'}} />}/> 
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
