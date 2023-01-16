import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider, InputLabel } from '@mui/material';
import Body from './../Body/Body'

const Header = () => {
    const testData = [
        {id:0, title:'Geyser 1'},
        {id:1, title:'Smart Geyser'},
        {id:2, title:'Mudasser Geyser'},
        {id:3, title:'Test System'},

    ]
    // const [data, setData] = React.useState(testData[0])
    const [value, setValue] = React.useState(testData[0])
    const handleChange = (f) => {
        // setData(f)
        // console.log(test)
        setValue(f)

    }
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel> Select Module</InputLabel>
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
      <Divider sx={{mt:'1rem'}} /> 
      <Body />
    </div>
  )
}

export default Header
