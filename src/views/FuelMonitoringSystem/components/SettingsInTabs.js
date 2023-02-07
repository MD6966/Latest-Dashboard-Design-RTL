import { Avatar, Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsCards from './SettingsCards';
import GenModeCard from './GenModeCard'

const SettingsINTabs = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       <SettingsCards/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <GenModeCard /> 
      </Grid>
    </Grid>
  )
}

export default SettingsINTabs
