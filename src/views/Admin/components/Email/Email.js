import { Send } from '@mui/icons-material'
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'

const Email = () => {
  return (
    <Page
    title="Email"
    >
      <Box sx={{minHeight:'100vh'}}>
      <Typography variant='h4'> Email </Typography>
      <Box      
      >
        <TextField label="To" fullWidth required sx={{mt:'2rem'}}/>
        <TextField label="Message" fullWidth required sx={{mt:'1rem'}} multiline rows={10}/>
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
        <Button sx={{mt:'1rem',bgcolor:'#264252' }} endIcon={<Send /> } variant='contained'> Send </Button>
        </Box>
        
        </Box> 
      </Box>
    </Page>
  )
}

export default Email
