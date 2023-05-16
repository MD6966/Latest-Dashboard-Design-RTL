import React from 'react'
import Page from '../../components/page/Page'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Divider, InputLabel, TextField, Box, Grid, Autocomplete } from '@mui/material';
import FuelSystemBody from './components/FuelSystemBody'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getFuelSensors} from '../../store/actions/fuelActions'
const FuelmonitoringSytem = () => {
  const testData = [
    {id:0, title:'Test System 1'},
    {id:1, title:'Test System 2  '},
    {id:2, title:'Fuel Monitoring System Testing'},
    {id:3, title:'Test System 3'},

]
const dispatch = useDispatch()
const fuel = useSelector((state)=> state.fuel.fuel)
const user_id = useSelector((state)=> state.auth.user.id)
const dashboards = useSelector((state) => state.auth.user.dashboards);
React.useEffect(()=> {
  dispatch(getFuelSensors(user_id))
}, [])
console.log(fuel, 'Hello Fuel')
const [value, setValue] = React.useState(fuel[0])
// const handleChange = (f) => {
//     // setData(f)
//     // console.log(test)
//     setValue(f)

// }
const handleChange = (event, newValue) => {
  if (newValue === null) {
    setValue(fuel[0]);
  } else {
    setValue(newValue);
  }
}
  return (
    <Page
    title="Fuel Monitoring System"
    >
      <Grid container spacing={2}>
      <Grid item xs= {10} md={10} lg={10} xl={10}>
      <Autocomplete 
      value={value}
      onChange={handleChange}
      options={fuel}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Select Module" />}
      fullWidth
      noOptionsText="No matching modules found"
      
      /> 
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
      {
        fuel.map((v, index) => (
          <>
          {
            value._id === v._id ? 
            <FuelSystemBody 
            key={index}
            sensor = {v}
            />
            : null
          }
          
          </>
        ))
      }
      
    </Page>
  )
}

export default FuelmonitoringSytem
