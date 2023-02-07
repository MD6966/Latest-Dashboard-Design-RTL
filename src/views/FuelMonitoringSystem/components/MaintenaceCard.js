import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MaintenaceCard = (props) => {
    const {title, status} = props
  return (
    <Card sx={{p:1, background:'#D0F2FF', border:'1px solid #d3d3d3'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column', alignItems:'center'}}>
        <Box sx={{mb:'0.5rem'}}>
            <Avatar sx={{backgroundImage:'linear-gradient(45deg, #D0F2FF, #1b799b )'}}>
                <AccessTimeIcon />
            </Avatar>
        </Box>
        <Box>
            <Typography sx={{fontSize:'11px', textAlign:'center'}}>{title}</Typography>
            <Typography sx={{textAlign:'center', fontWeight:800}}> {status} </Typography>
        </Box>

      </Box>
    </Card>
  )
}

export default MaintenaceCard
