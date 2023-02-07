import { ExitToApp } from '@mui/icons-material'
import NotificationsActive from '@mui/icons-material/NotificationsActive'
import { AppBar, Toolbar, styled, Typography, Box, IconButton, Button, } from '@mui/material'
import React from 'react'
import { bgBlur } from '../../../../utils/cssStyles'
const StyledRoot = styled(AppBar)(({theme})=> ({
    ...bgBlur({color: theme.palette.background.default}),
    position:'static',
    backgroundColor:'#264252',
  
  }))
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display:'flex',
    justifyContent:'space-between'
   }))

const TopBar = () => {
  return (
    <StyledRoot>
    <StyledToolbar>
      <Box>
        <Typography> Admin Pannel </Typography>
      </Box>
      <Box>
        <IconButton>
          <NotificationsActive sx={{color:'#fff'}} /> 
        </IconButton>
        <Button sx={{color:'#fff', ml:2}} endIcon={<ExitToApp />} >
          Sign Out
        </Button>
      </Box>
    </StyledToolbar>
</StyledRoot>
  )
}

export default TopBar
