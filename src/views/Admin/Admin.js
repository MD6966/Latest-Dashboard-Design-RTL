import { Avatar, Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Gradients from '../../utils/Gradients'
import AdminLoginForm from './AdminLoginForm'

const Admin = () => {
   
    const StyledRoot = styled('div')(({theme})=> ({
        backgroundImage: Gradients.Custom,
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    }))
    const CenteredBox = styled(Box)(({theme})=> ({
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }))
    
   
    
   
  

  return (
    <StyledRoot>
        <Stack>
            <CenteredBox>
                <Avatar sx={{height:'150px', width:'150px'}} src='/assets/images/admin.png' /> 
            </CenteredBox>
            <Typography variant='h4' sx={{textAlign:'center'}}> Admin Login </Typography>
            <Typography sx={{textAlign:'center', mb:'1rem'}}> Sign in on the internal platform </Typography>
                    <AdminLoginForm /> 
              
        </Stack>
    </StyledRoot>
            
  )
}

export default Admin
 