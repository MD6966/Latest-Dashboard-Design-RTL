import React from 'react'
import { AppBar, Toolbar, styled, Typography, Stack, Avatar, Box } from '@mui/material'
import { bgBlur } from '../../../../utils/cssStyles'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const NAV_WIDTH = 280;

const HEADER_MOBILE = 54;

const HEADER_DESKTOP = 62;

const StyledRoot = styled(AppBar)(({theme})=> ({
    ...bgBlur({color: theme.palette.background.default}),
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      },
  
  }))
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
      },
   }))

const TopBar = () => {
  return (
    <StyledRoot >
        <StyledToolbar>
          <Typography sx={{color:'#000000', fontWeight:800, fontSize:'1.5rem'}}>
           Dashboard
          </Typography>
          <Box sx={{flexGrow:1}} />
          <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs:0.5,
            sm:1
          }}
          >
              <NotificationsActiveIcon sx={{color:'#000000', mr:'1rem'}} /> 
              <Avatar src="/assets/images/user.png" />
          </Stack>

        </StyledToolbar>
    </StyledRoot>
  )
}

export default TopBar
