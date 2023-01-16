import { Typography, styled, AppBar, Toolbar , Box} from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import ParticlesContainer from '../../../components/Particles/ParticlesContainer'
import { bgBlur } from '../../../utils/cssStyles'
const StyledRoot = styled(AppBar)(({theme})=> ({
  ...bgBlur({color: theme.palette.background.default}),
  position:'static',
  backgroundColor:'#264252',

}))
const StyledToolbar = styled(Toolbar)(({theme})=> ({
  display:'flex',
  justifyContent:'space-between'
 }))

const AuthLayout = () => {
  return (
    <div>
      <ParticlesContainer /> 
      <StyledRoot >
        <StyledToolbar>
        <Box><img src='/assets/images/logo.webp' width='170px' alt='logo' /></Box>
        </StyledToolbar>
      </StyledRoot>
    <Outlet  /> 
    </div>
  )
}

export default AuthLayout
