import { Avatar, Box, Button, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Gradients from '../../utils/Gradients'

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
    const StyledButton = styled(Button)(({theme})=> ({
        margin:'10px 0',
        background:'#264252',
        '&:hover' : {
            background:'#357ea5'
        }
    }))
  return (
    <StyledRoot>
        <Stack>
            <CenteredBox>
                <Avatar sx={{height:'150px', width:'150px'}} src='/assets/images/admin.png' /> 
            </CenteredBox>
            <Typography variant='h4' sx={{textAlign:'center'}}> Admin Login </Typography>
            <Typography sx={{textAlign:'center', mb:'1rem'}}> Sign in on the internal platform </Typography>
            <TextField label='Email' sx={{mb:'1rem', width:'350px',}}/>
            <TextField label='Password' sx={{mb:'1rem', width:'350px',}}/>
            <StyledButton variant='contained'
            component={Link}
            to='/admin/users'
            > Login </StyledButton>
        </Stack>
    </StyledRoot>
  )
}

export default Admin
 