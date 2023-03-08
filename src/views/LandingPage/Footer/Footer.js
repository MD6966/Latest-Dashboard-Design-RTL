import { Box, Divider, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Footer = () => {
  const StyledLink = styled(Link)(({theme})=> ({
    textDecoration: 'none',
    '&:hover' : {
      textDecoration:'underline',
      fontWeight:'bold'
    }
  }))
  const isAdminAuthenticated = useSelector((state)=> state.admin.isAdminAuthenticated)
  return (
    <div style={{height:'60vh', background:'#CDCED0', padding:'5rem'}}>
      <Grid container spacing={5}>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
      <Box>
      <Typography variant='h4' sx={{fontWeight:'bold'}} gutterBottom> About </Typography>
      <Typography>
      We help clients be more efficient by providing a more holistic view of their enterprise, building or home operations
      </Typography>
        </Box>
    </Grid>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
      <Typography variant='h4' sx={{fontWeight:'bold'}} gutterBottom> Important Links </Typography>
      <Box sx={{display:'flex', mb:'1rem'}}>

        <DoneIcon sx={{mr:'1rem'}} />
      <Typography>
      Our business partners startupguide.com
      </Typography>
      </Box>
      <Box sx={{display:'flex',}}>

        <DoneIcon sx={{mr:'1rem'}} />
      <Typography>
      Read our Terms & Conditions, Privacy Policy
      </Typography>
      </Box>
    </Grid>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
      
      <Typography variant='h4' sx={{fontWeight:'bold'}} gutterBottom> Contact </Typography>
      <Box sx={{display:'flex', mb:'1rem'}}>

        <LocationOnIcon sx={{mr:'1rem'}} />
      <Typography>
      199-C, Basement, Phase 8 Commercial Broadway, DHA Lahore, 5400, Pakistan
      </Typography>
      </Box>
      <Box sx={{display:'flex', mb:'1rem'}}>

<EmailIcon sx={{mr:'1rem'}} />
<Typography>
info@rubitronlabs.org
</Typography>
</Box>
<Box sx={{display:'flex', mb:'1rem'}}>

<AdminPanelSettingsIcon sx={{mr:'1rem'}} />
<StyledLink to={isAdminAuthenticated ? '/admin/users' : '/auth/admin/login'} >
Admin 
</StyledLink>
</Box>
    </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: '2px', borderColor:'#000000', mt:'1rem' }} /> 
      <Typography sx={{textAlign:'center', mt:'1rem'}}>
        Copyright &copy; 2022 Rubitron Labs. A Project of Sync & Secure Technologies
      </Typography>
    </div>
  )
}

export default Footer
