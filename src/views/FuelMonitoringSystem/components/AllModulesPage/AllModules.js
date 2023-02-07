import { Divider, Grid, Box, Typography, Button, styled } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'
import ModuleStatus from './components/ModuleStatus'
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
const CenteredBox = styled(Box)(({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))

const AllModules = () => {
    const navigate = useNavigate()
    const Data = [
        {title:'Test System 1', genStatus:'ON', hard:'Connected', location:'Office' },
        {title:'Test System 2', genStatus:'OFF', hard:'Disconnected', location:'Home' },
        {title:'System Testing', genStatus:'OFF', hard:'Disconnected', location:'Office' },
        {title:'Test System 3', genStatus:'ON', hard:'Connected', location:'Office' }
    ]
  return (
    <Page
    title='Fuel Modules'
    >
        <CenteredBox>
            <CenteredBox sx={{ml:'2rem'}}>
            <CircleIcon sx={{fontSize:'15px', color:'green'}} /> 
                <Typography sx={{ml:'0.5rem'}}> Hardware Connected</Typography>
            </CenteredBox>
            <CenteredBox sx={{ml:'2rem'}}>
            <CircleIcon sx={{fontSize:'15px', color:'red'}} /> 
                <Typography sx={{ml:'0.5rem'}}> Hardware Not Connected</Typography>
            </CenteredBox>
          
        
          </CenteredBox>
        <Divider sx={{m: '10px 0'}} /> 
      <Grid container spacing={2}>
        {
            Data.map((val)=> {
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <ModuleStatus data={val} /> 
                </Grid>
                )
            })
        }
       
       
      </Grid>
      <CenteredBox>
      <Button variant='contained' sx={{mt:'1rem',}}  
      onClick={()=> navigate('/dashboard/fuel', {replace:true})}
      > Go back </Button>
      </CenteredBox>
    </Page>
  )
}

export default AllModules
