import React from 'react'
import { Box, Card, Stack, Typography } from '@mui/material'
import Gradients from '../../../../../../../utils/Gradients'

const GeyserModuleStatus = (props) => {
    const {data} = props
    console.log(data)
  return (
    <Card >
    <Stack>
      <Box sx={{p:1, backgroundImage: data.system_status ? Gradients.green : Gradients.red }} >
      <Typography sx={{textAlign:'center', color:'#ffffff'}} variant='h4'>{data.name}</Typography>
      </Box>
      <Box sx={{p:2, background:'#e2e2e2'}}>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h5' sx={{textAlign:'center'}}>Geyser Status:</Typography>
        <Typography variant='h5'> {data.geyser_status === true ? ('On') : ('Off')}</Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h5' sx={{textAlign:'center'}}>Temperature:</Typography>
        <Typography variant='h5'> {`${data.temperature} °C`} </Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h5' sx={{textAlign:'center'}}>Source:</Typography>
        <Typography variant='h5'> {data.supply_mode} </Typography>
        </Box>
      </Box>

    </Stack> 
  </Card>
  )
}

export default GeyserModuleStatus
