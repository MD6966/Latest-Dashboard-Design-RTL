import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TopBar from './components/TopBar'
import {Avatar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Typography} from '@mui/material'
import Gradients from '../../../utils/Gradients'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import Page from '../../../components/page/Page'
import PersonIcon from '@mui/icons-material/Person';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ErrorIcon from '@mui/icons-material/Error';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@mui/styles'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import clsx from 'clsx';
const useStyles = makeStyles((theme)=> ({
  selected : {
    background:'#a1abaf'
  }
}))
const drawerWidth = 240;
const ListData = [
  {id:1, title:'Users', icon:<PersonIcon />, to:'/admin/users'  },
  {id:2, title:'Modules', icon:<ViewModuleIcon />, to:'/admin/modules'},
  {id:3, title:'Complaints', icon:<ErrorIcon/>, to:'/admin/complaints'},
  {id:4, title:'Email', icon:<EmailIcon/>, to:'/admin/email'},
  {id:5, title:'Register User', icon:<HowToRegIcon/>, to:'/admin/register'},




]
const Dashboard = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const classes = useStyles()
  const [progress, setProgress] = useState(100)
  return (
    <Page
    title='Admin Dashboard'
    >
      <Box sx={{display:'flex'}}>
        <CssBaseline /> 
        <TopBar /> 
        <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        PaperProps={{
          sx: {
            background:'#264252'
          }
        }}
        >
          <Toolbar /> 
          <Box>
            <Box sx={{display:'flex', justifyContent:'center',}}>
              <Avatar src='/assets/images/admin.png' sx={{height:'120px', width:'120px', mt:'2rem'}} />
            </Box>
            <Typography sx={{color:'#fff', textAlign:'center'}} variant='h6' gutterBottom> Admin </Typography>
            <Divider /> 
            <Box sx={{p:1}}>
              <Typography sx={{color:'#fff', fontSize:'15px', mt:1 }}> Admin Dashboard</Typography>
              <List component="nav">
                {ListData.map((val)=> {
                  return(
                    <>
                    <ListItem key={val} disablePadding
                    className={clsx(classes.root, {
                      [classes.selected]: selectedIndex === val.id,
                    })}
                    component={Link}
                    to={val.to}
                    >
                      <ListItemButton
                       selected={selectedIndex === val.id}
                       onClick={(event) => handleListItemClick(event, val.id)}
                       
                      >
                        <ListItemIcon sx={{color:'#fff'}}>
                          {val.icon}
                        </ListItemIcon>
                      <ListItemText primary={val.title} sx={{color:'#fff'}} />
                      </ListItemButton>
                    </ListItem>
                    </>
                  )
                })}
              </List>
            </Box>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundImage: Gradients.Custom, }}>
        <Toolbar /> 
          <Outlet /> 
        </Box>
      </Box>
    </Page>
  )
}

export default Dashboard
