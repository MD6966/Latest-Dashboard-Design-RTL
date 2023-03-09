import React, {useState} from 'react'
import { AppBar, Toolbar, styled, Typography, Stack, Avatar, Box, Menu, MenuItem, 
Container, Divider, List, ListItemIcon, ListItemText, ListItem, Button } from '@mui/material'
import { bgBlur } from '../../../../utils/cssStyles'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ViewProfile from './components/ViewProfile';
import AddSensor from './components/AddSensor'
import Settings from './components/Settings';
import HelpCenter from './components/HelpCenter';
import { logout } from '../../../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
  const user = useSelector((state)=> state.auth.user)
  console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [dialogOpen, setDialogOpen]=useState(false)
  const [settingsDialog, setSettingsDialog]= useState(false)
  const [helpDialog, setHelpDialog]= useState(false)
  const [sensorDialog, setSensorDialog]= useState(false)
  const handleAvatarClick =(event) => {
    setAnchorEl(event.currentTarget);

  }
  const handleClose = () => {
    setAnchorEl(null);

  }
  const ProfileDialogHandler = () => {
    setDialogOpen(true)
    setAnchorEl(null);
   }
   const settingsDialogHandler = () => {
    setSettingsDialog(true)
    setAnchorEl(null);
   }

   const helpDialogHandler = () => {
    setHelpDialog(true)
    setAnchorEl(null)
   }
   const sensorDialogHandler = () => {
      setSensorDialog(true)
      setAnchorEl(null)
   }
   const handleSignOut = () => {
    handleClose()
    confirmAlert({
      title: 'Log Out',
      message: 'Are you sure to log out ?',
      buttons:[
        {
          label: 'Yes',
          onClick: ()=>{
            dispatch(logout())
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
    <>
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
              <Avatar src={`${process.env.REACT_APP_URL}${user.profilePic}`} sx={{cursor:'pointer'}} onClick={handleAvatarClick}/>
          </Stack>

        </StyledToolbar>
    </StyledRoot>
            <Menu
            open={open}
         anchorEl={anchorEl}
         onClose={handleClose}>
          <MenuItem>
          <Container>
          <Typography variant='h6' style={{fontWeight:'bold'}}>{user.name} </Typography>
          </Container>
          <Divider style={{margin:'0px 10px'}} /> 
          </MenuItem>
          <List>
   
          <ListItem disablePadding button  onClick={ProfileDialogHandler}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <PersonIcon /> 
          </ListItemIcon>
            <ListItemText> View Profile</ListItemText>
          </ListItem>
          <ListItem disablePadding button onClick={sensorDialogHandler}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <AddIcon  /> 
          </ListItemIcon>
            <ListItemText> Add Sensor </ListItemText>
          </ListItem>
          <ListItem disablePadding button  onClick={settingsDialogHandler}style={{paddingLeft:'0.5rem', marginRight:'2rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <SettingsIcon /> 
          </ListItemIcon>
            <ListItemText> Account Settings</ListItemText>
          </ListItem>
          <ListItem disablePadding button onClick={helpDialogHandler}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <InfoIcon  /> 
          </ListItemIcon>
            <ListItemText> Help Center</ListItemText>
          </ListItem>
          <ListItem disablePadding button onClick={handleClose}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <QuestionMarkIcon  /> 
          </ListItemIcon>
            <ListItemText> FAQ's</ListItemText>
          </ListItem>
          
         </List>
         <Divider style={{margin:'0px 10px'}} />  
         <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
         <Button 
        onClick={handleSignOut}
        > Sign Out </Button>
        </Box>
            </Menu>
            <ViewProfile open={dialogOpen} close ={()=> setDialogOpen(false)}  />
            <AddSensor open={sensorDialog} close ={()=> setSensorDialog(false)} /> 
            <Settings open={settingsDialog} close={()=> setSettingsDialog(false)} /> 
            <HelpCenter open={helpDialog} close={()=> setHelpDialog(false)}/> 

            </>
  )
}

export default TopBar
