import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { useField } from 'formik'
import {makeStyles} from '@mui/styles'
import PersonIcon from '@mui/icons-material/Person';

const useStyle = makeStyles((theme) => ({
  textField : {
    // marginBottom: theme.spacing(2)
  
  },
  resize:{
    fontSize:14
  },

}))

const TextFieldComponent = ({name,icon, endIcon, ...otherProps}) => {
  const classes = useStyle()

    const [field, meta] = useField(name)
    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant: 'filled'
    }

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error
    }
  return (
    <div>
      <TextField  {...configTextField}
       InputProps={{
        classes: {
              input:classes.resize
        },
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position='end'>
            {endIcon}
          </InputAdornment>
        )
      }}
      />
    </div>
  )
}

export default TextFieldComponent
