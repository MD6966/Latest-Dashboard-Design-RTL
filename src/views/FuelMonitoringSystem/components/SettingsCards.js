import React from 'react'
import { Avatar, Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';


const SettingsCards = () => {
  return (
    <div>
       <Card sx={{padding:'1rem', bgcolor:'#FFF7CD', display:'flex', justifyContent:'space-between', alignItems:'center', border: '1px solid #d3d3d3'}}>
          <Box>
            <Stack>
                <Typography > Tank Capacity </Typography>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography variant='h4' > 50 liters </Typography>
                <Button variant='outlined' sx={{ml:'2rem'}}> Set Threshold</Button>
                </Box>
                
            </Stack>
          </Box>
          <Box>
                <Avatar sx={{backgroundImage:'linear-gradient(45deg, #f2e5a7,#b5a13f )', height:'50px', width:'50px'}}>
            <LocalGasStationIcon /> 
                </Avatar>
          </Box>
        </Card>
    </div>
  )
}

export default SettingsCards
