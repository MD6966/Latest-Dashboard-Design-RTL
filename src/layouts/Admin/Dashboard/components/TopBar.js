import { ExitToApp } from '@mui/icons-material'
import NotificationsActive from '@mui/icons-material/NotificationsActive'
import { AppBar, Toolbar, styled, Typography, Box, IconButton, Button, } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { bgBlur } from '../../../../utils/cssStyles'
import { adminLogOut } from '../../../../store/actions/adminActions'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const StyledRoot = styled(AppBar)(({theme})=> ({
    ...bgBlur({color: theme.palette.background.default}),
    position:'fixed',
    backgroundColor:'#264252',
    zIndex:theme.zIndex.drawer + 1,
  }))
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display:'flex',
    justifyContent:'space-between'
   }))

const TopBar = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    confirmAlert({
      title: 'Log Out',
      message: 'Are you sure to log out ?',
      buttons:[
        {
          label: 'Yes',
          onClick: ()=>{
            dispatch(adminLogOut())
            navigate('/')
          }
        },
       {
        label: 'No',
       }

      ]
    })
    

  }
  return (
    <StyledRoot >
    <StyledToolbar>
      <Box>
        <Typography> Admin Pannel </Typography>
      </Box>
      <Box>
        <IconButton>
          <NotificationsActive sx={{color:'#fff'}} /> 
        </IconButton>
        <Button sx={{color:'#fff', ml:2}} endIcon={<ExitToApp />} onClick={handleLogOut}>
          Sign Out
        </Button>
      </Box>
    </StyledToolbar>
</StyledRoot>
  )
}

export default TopBar
