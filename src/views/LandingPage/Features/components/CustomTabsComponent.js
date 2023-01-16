import React from 'react'
import {Grid, Box,Typography,List, ListItem,ListItemIcon,ListItemText} from '@mui/material'

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomTabsComponent = (props) => {
    React.useEffect(()=> {
        AOS.init({duration:2000});
      },[])
    const {image, data, title, direction} = props
   if (direction === 'ltr')
   {
    return (
        <div>
        <Grid container sx={{mt:'3rem'}}>
          <Grid item
          xs={6}
          md={6}
          lg={6}
        data-aos="flip-left"
          >
              <Box component='img' src={image} 
              sx={{height:'310px',}}
              />
  
          </Grid>
          <Grid item
          xs={6}
          md={6}
          lg={6}
          data-aos="fade-down"
          >
              <Typography variant='h6' sx={{fontWeight:'bold'}}>
              {title}
              </Typography>
              {data.map((val)=> {
                  return(
                      <List>
                      <ListItem disablePadding sx={{mb:'-1rem'}}>
                          <ListItemIcon>
                              <DoubleArrowIcon />
                          </ListItemIcon>
                          <ListItemText sx={{ml:'-1rem', }}>
                              {val.title}
                          </ListItemText>
                      </ListItem>
                  </List>
                  )
              })}
            
  
          </Grid>
  
        </Grid>
      </div>
    )
   }
  return (
    
    <div>
      <Grid container sx={{mt:'3rem'}}>
       
        <Grid item
        xs={6}
        md={6}
        lg={6}
        data-aos="fade-down"

        >
            <Typography variant='h6' sx={{fontWeight:'bold'}}>
            {title}
            </Typography>
            {data.map((val)=> {
                return(
                    <List>
                    <ListItem disablePadding sx={{mb:'-1rem'}}>
                        <ListItemIcon>
                            <DoubleArrowIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ml:'-1rem', }}>
                            {val.title}
                        </ListItemText>
                    </ListItem>
                </List>
                )
            })}
          

        </Grid>
        <Grid item
        xs={6}
        md={6}
        lg={6}
        data-aos="flip-right"
        
        >
            <Box component='img' src={image} 
            sx={{height:'310px',}}
            />

        </Grid>
      </Grid>
    </div>
  )
}

export default CustomTabsComponent
