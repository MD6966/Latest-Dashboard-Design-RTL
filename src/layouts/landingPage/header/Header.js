import { AppBar, Box, Button,Toolbar} from '@mui/material'
import React from 'react'
import {bgBlur} from '../../../utils/cssStyles'
import {styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const StyledRoot = styled(AppBar)(({theme})=> ({
  ...bgBlur({color: theme.palette.background.default}),

}))
const StyledToolbar = styled(Toolbar)(({theme})=> ({
 display:'flex',
 justifyContent:'space-between'
}))

const StyledButton = styled(Button)(({theme})=> ({
  fontWeight:800,
  color:'#17434d',
  margin:'0.75rem'
}))
const StyledLoginButton = styled(Button)(({theme})=> ({
  marginLeft:'1rem',
      borderRadius:'20px',
      fontWeight:800,
      color:'#17434d',
      borderColor:'#17434d',
      '&:hover': {
      borderColor:'#17434d',
      color:'#ffffff',
      background:'#17434D'
      }
 
}))

const Header = () => {

  return (
    <>
    <StyledRoot>
        <StyledToolbar>
          <Box><img src='/assets/images/logo.webp' width='170px' alt='logo' /></Box>
          <Box>
            <StyledButton> Home </StyledButton>
            <StyledButton> Features </StyledButton>
            <StyledButton> Details </StyledButton>
          </Box>
          <Box>
         <StyledLoginButton variant='outlined'
         component={Link} to='/auth/login'
         > Login</StyledLoginButton>
          </Box>
        </StyledToolbar>
      </StyledRoot>
    </>
  )
}

export default Header
