import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Divider, Grid, InputLabel, Autocomplete, TextField } from '@mui/material';
import Body from './../Body/Body'
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {geyserhybrid} = props
  
    const [value, setValue] = React.useState(geyserhybrid[0])
    const handleChange = (event, newValue) => {
      if (newValue === null) {
        setValue(geyserhybrid[0]);
      } else {
        setValue(newValue);
      }
    }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs= {10} md={10} lg={10} xl={10}>
        <Autocomplete
            value={value}
            onChange={handleChange}
            options={geyserhybrid}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Select Module" />}
            fullWidth
            noOptionsText="No matching modules found"
            
          />
        {/* <FormControl fullWidth>
        <InputLabel> Select Module</InputLabel>
        <Select
        label="Select Module"
        >
           {
      geyserhybrid.map((val,index) => {
        return(
      
          <MenuItem onClick={() => handleChange(val)} value={val.name} index={index} key ={index}>{val.name}
              
           </MenuItem>
         
          )
      }
      )
      
      }
        </Select>
      </FormControl> */}
        </Grid>
        <Grid item xs= {2} md={2} lg={2} xl={2}>
      <Button
      variant='contained'
      component={Link}
      to='/dashboard/geyser-modules'
      > All Modules</Button>
        </Grid>

      </Grid>
     
      <Divider sx={{mt:'1rem'}} /> 
      {
        geyserhybrid.map((v, index) => (
          <>
          {
            value._id === v._id ? 
            <Body 
            key={index}
            sensor = {v}
            />
            : null
          }
          
          </>
        ))
      }
    </div>
  )
}

export default Header
