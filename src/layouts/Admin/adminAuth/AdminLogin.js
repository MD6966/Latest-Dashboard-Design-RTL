import { AppBar, Toolbar, styled, } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { bgBlur } from '../../../utils/cssStyles'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
const StyledRoot = styled(AppBar)(({theme})=> ({
  ...bgBlur({color: theme.palette.background.default}),
  position:'fixed',
  backgroundColor:'#264252',

}))
const StyledToolbar = styled(Toolbar)(({theme})=> ({
  display:'flex',
  justifyContent:'space-between'
 }))

const AdminLogin = () => {
  const [progress, setProgress] = useState(100)
 
  return (
  <div>
    <StyledRoot>
      <StyledToolbar>
        Admin Login 
      </StyledToolbar>
    </StyledRoot>
    <Outlet /> 
    <LoadingBar color='#f11946'
    loaderSpeed={1000}
    height={3}
        progress={progress} />
  </div>

  )
}

export default AdminLogin
