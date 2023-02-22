import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import Scrollbar from '../../../../components/scrollbar/Scrollbar';
import useResponsive from '../../../../components/hooks/useResponsive';
import {navConfig} from './navConfig'
import NavSection from '../../../../components/NavSection/NavSection'
import { useSelector } from 'react-redux';

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
  }));


  export default function Nav({ openNav, onCloseNav }) {
    const user = useSelector((state) => state.auth.user)
    const { pathname } = useLocation();
  
    const isDesktop = useResponsive('up', 'lg');
  
    useEffect(() => {
      if (openNav) {
        onCloseNav();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
  
    const renderContent = (
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
        }}
      >
        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
          <img src="/assets/images/logo.webp" alt='logo' width='170px' />
        </Box>
  
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none">
            <StyledAccount>
              <Avatar  alt="photoURL" src={`${process.env.REACT_APP_URL}${user.profilePic}`} />
  
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                 {user.name}
                </Typography>
  
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  User
                </Typography>
              </Box>
            </StyledAccount>
          </Link>
        </Box>
  
        <NavSection data={navConfig} />
  
        <Box sx={{ flexGrow: 1 }} />

        
      </Scrollbar>
    );
  
    return (
      <Box
        component="nav"
        sx={{
          flexShrink: { lg: 0 },
          width: { lg: NAV_WIDTH },
        }}
      >
        {isDesktop ? (
          <Drawer
            open
            variant="permanent"
            PaperProps={{
              sx: {
                width: NAV_WIDTH,
                bgcolor: 'background.default',
                borderRightStyle: 'dashed',
              },
            }}
          >
            {renderContent}
          </Drawer>
        ) : (
          <Drawer
            open={openNav}
            onClose={onCloseNav}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: { width: NAV_WIDTH },
            }}
          >
            {renderContent}
          </Drawer>
        )}
      </Box>
    );
  }