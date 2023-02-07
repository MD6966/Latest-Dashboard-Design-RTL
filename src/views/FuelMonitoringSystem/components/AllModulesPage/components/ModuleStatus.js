import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import Gradients from '../../../../../utils/Gradients'

const ModuleStatus = (props) => {
  const {data} = props

  return (
    <Card >
      <Stack>
        <Box sx={{p:1, backgroundImage: data.hard === 'Connected' ? Gradients.green : Gradients.red }} >
        <Typography sx={{textAlign:'center', color:'#ffffff'}} variant='h4'> {data.title}</Typography>
        </Box>
        <Box sx={{p:2, background:'#e2e2e2'}}>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant='h5' sx={{textAlign:'center'}}>Generator Status:</Typography>
          <Typography variant='h5'> {data.genStatus} </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant='h5' sx={{textAlign:'center'}}>Hardware:</Typography>
          <Typography variant='h5'> {data.hard} </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Typography variant='h5' sx={{textAlign:'center'}}>Location:</Typography>
          <Typography variant='h5'> {data.location} </Typography>
          </Box>
        </Box>

      </Stack> 
    </Card>
  )
}

export default ModuleStatus


// gen status
// harware connected or not
// address 