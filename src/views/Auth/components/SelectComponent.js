import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=> ({
    TextField: {
        // marginBottom:theme.spacing(2)
    }
}))
const SelectComponent = ({name, options, ...otherProps}) => {
    const {setFieldValue} = useFormikContext()
    const [field, meta] = useField(name)
    const handleChange = (e) => {
        const {value} = e.target;
        setFieldValue(name, value)
    };
    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant:'filled',
        fullWidth:true,
        onChange: handleChange
    }
    if(meta && meta.touched && meta.error) {
        configSelect.error =true;
        configSelect.helperText = meta.error
    }
    const classes = useStyles()
  return (
    <div>
        <TextField {...configSelect} className={classes.TextField}>
            {Object.keys(options).map((item, pos)=> {
                return(
                    <MenuItem key={pos} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })}

        </TextField>
      
    </div>
  )
}

export default SelectComponent
