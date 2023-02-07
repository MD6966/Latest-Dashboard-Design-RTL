import { Card, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VerticalTabs from './SettingsTabs';

const Settings = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mb:1 }}>
                <Typography variant="h5">Settings</Typography>
            </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
        <Card sx={{padding:'1rem', height:'50vh',}}>
            <VerticalTabs /> 
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card sx={{padding:'1rem', height:'50vh'}} >
          <Typography variant='h6'>
            Maintenance Logs
          </Typography>
          <Divider /> 
        </Card>
      </Grid>
    </Grid>
  )
}

export default Settings
