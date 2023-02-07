import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const OilChangeThreshold = () => {
  return (

       <Card sx={{p:1, background:'#D0F2FF', border:'1px solid #d3d3d3'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column', alignItems:'center', }}>
        <Box sx={{mb:'0.8rem',}}>
            <Avatar sx={{backgroundImage:'linear-gradient(45deg, #D0F2FF, #1b799b )'}}>
                <AccessTimeIcon />
            </Avatar>
      
        </Box>
      </Box>
        <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
            <Box>
            <Typography sx={{fontSize:'11px', textAlign:'center'}}>Oil Change Threshold</Typography>
            <Typography sx={{textAlign:'center', fontWeight:800}}> 100 Hours </Typography>
            </Box>
            <Button variant='outlined' size='small'> Set </Button>
        </Box>

    </Card>
  )
}

export default OilChangeThreshold
