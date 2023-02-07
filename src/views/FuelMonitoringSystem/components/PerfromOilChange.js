import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const PerfromOilChange = () => {
  return (
    <Card sx={{p:1, background:'#D0F2FF', border:'1px solid #d3d3d3'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column', alignItems:'center', }}>
        <Box sx={{mb:'0.8rem',}}>
            <Avatar sx={{backgroundImage:'linear-gradient(45deg, #D0F2FF, #1b799b )'}}>
                <AccessTimeIcon />
            </Avatar>
      
        </Box>
     
            <Box>
            <Typography sx={{fontSize:'11px', textAlign:'center'}}>Perform Oil Change</Typography>
            <Button variant='outlined' size='small'> LOG OIL Change  </Button>
            </Box>
      </Box>


    </Card>
  )
}

export default PerfromOilChange
