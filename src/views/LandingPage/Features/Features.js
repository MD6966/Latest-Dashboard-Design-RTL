import React from 'react'
import { Typography, Tabs, Tab, Box } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FactoryIcon from '@mui/icons-material/Factory';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AccesNsurveillance from './components/AccesNsurveillance';
import AgricultureNfishery from './components/AgricultureNfishery';
import BuildingNcommunity from './components/BuildingNcommunity';
import Industrial from './components/Industrial';


const Features = () => {
  const [value, setValue] = React.useState(0)
const handleTabsChange = (e, value) => {
    setValue(value)
}
  return (
    <div style={{padding:'5rem'}}>
     <Typography variant='h3' sx={{textAlign:'center', fontWeight:'bold'}} gutterBottom>
          Marketing Automation
          </Typography>
          <Typography sx={{textAlign:'center'}}>
          LIVING UP TO THE PROMISE OF DRIVING EFFICIENCY AND ENHANCING PERFORMANCE
          </Typography>
          <Box sx={{display:'flex', justifyContent:'center', marginTop:'2rem',}}>
        <Tabs
        value={value}
        onChange={handleTabsChange}
        >
          <Tab label='Access & Surveillance' icon={<ComputerIcon /> } iconPosition='start'/>
          <Tab label='Building and Community' icon={<ApartmentIcon /> } iconPosition='start' />
          <Tab label='Industrial' icon={<FactoryIcon /> } iconPosition='start' />
          <Tab label='Agriculture & Fishery' icon={<AgricultureIcon /> } iconPosition='start' />


        </Tabs>
        </Box>
        {value === 0 && <AccesNsurveillance /> }
        {value === 1 && <BuildingNcommunity />}
        {value === 2 && <Industrial />}
        {value === 3 && <AgricultureNfishery />}
    </div>
  )
}

export default Features
