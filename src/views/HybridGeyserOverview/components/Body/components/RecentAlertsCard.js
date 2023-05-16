import React from 'react'
import Gradients from '../../../../../utils/Gradients'
import { Box, Card, Typography } from '@mui/material'

const RecentAlertsCard = (props) => {
    // console.log(props, '+++++++++++++++++++++++++')
    const {alert, at} = props
  return (
    <div>
          <Card sx={{p:1, backgroundImage:Gradients.blue, mb:1}}>
            <Box sx={{display:'flex',}}>
            <Typography fontWeight="bold" sx={{color:'#ffff'}} >Alert:</Typography>
            <Typography sx={{ml:'5px', color:'#D0F2FF'}}> {alert} </Typography>
            </Box>
            <Box sx={{display:'flex'}}>
            <Typography fontWeight="bold" sx={{color:'#ffff'}} >At:</Typography>
            <Typography sx={{ml:'5px', color:'#D0F2FF'}} > {at}</Typography>

            </Box>

          </Card>
    </div>
  )
}

export default RecentAlertsCard
