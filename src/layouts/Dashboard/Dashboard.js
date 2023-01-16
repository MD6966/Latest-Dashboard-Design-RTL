import React from 'react'
import TopBar from './components/TopBar/TopBar'
import {AppBar, styled, Typography} from '@mui/material'
import Nav from './components/NavBar';
import { Outlet } from 'react-router-dom';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledRoot>
    <TopBar onOpenNav={() => setOpen(true)} />
    <Nav openNav={open} onCloseNav={() => setOpen(false)} />
    <Main>
      <Outlet /> 
    </Main>
    <AppBar sx={{position:'fixed', top:'auto', bottom:0, bgcolor:'#c9c7c7'}}>
      <Typography sx={{textAlign:'center', color:'#000',}}>
        Powered by Sync & Secure 
      </Typography>
    </AppBar>
    </StyledRoot>
  )
}

export default Dashboard
