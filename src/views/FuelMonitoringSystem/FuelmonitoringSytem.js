import React from 'react'
import Page from '../../components/page/Page'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Divider, InputLabel, Box, Grid } from '@mui/material';
import FuelSystemBody from './components/FuelSystemBody'
import { Link } from 'react-router-dom';
const FuelmonitoringSytem = () => {
  const testData = [
    {id:0, title:'Test System 1'},
    {id:1, title:'Test System 2  '},
    {id:2, title:'Fuel Monitoring System Testing'},
    {id:3, title:'Test System 3'},

]
const [value, setValue] = React.useState(testData[0])
const handleChange = (f) => {
    // setData(f)
    // console.log(test)
    setValue(f)

}
  return (
    <Page
    title="Fuel Monitoring System"
    >
      <Grid container spacing={2}>
      <Grid item xs= {10} md={10} lg={10} xl={10}>
      <FormControl fullWidth sx={{mt:'-1rem'}} >
        <InputLabel > Select Module</InputLabel>
        <Select
        label="Select Module"
        >
           {
             testData.map((val,index) => (
               
               
               <MenuItem onClick={() => handleChange(val)} value={val.title} index={index} key ={index}>{val.title}
            
         </MenuItem>
       
       )
       )
       
      }
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs= {2} md={2} lg={2} xl={2}>
      <Button
      variant='contained'
      component={Link}
      to='/dashboard/fuel-modules'
      > All Modules </Button>
      </Grid>
      </Grid>
     
      <Divider sx={{mt:'1rem'}} /> 
      <FuelSystemBody />
      
    </Page>
  )
}

export default FuelmonitoringSytem
