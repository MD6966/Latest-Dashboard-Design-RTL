import { Formik, Form } from 'formik'
import React from 'react'
import TextFieldComponent from './TextFieldComponent'
import { useState } from 'react'
import * as Yup from 'yup'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Call, Email, Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { makeStyles } from '@mui/styles'
import SelectComponent from './SelectComponent'
import Cities from './Cities.json'
import ButtonComponent from './ButtonComponent'
import {Alert, Box, Button, Grid, IconButton, InputLabel, Snackbar, Typography, Divider, TextField, MenuItem, Select, FormControl } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
// import { register } from '../../store/actions/authActions'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { useSnackbar } from 'notistack'
// import {RotatingLines  } from 'react-loader-spinner'


const useStyles = makeStyles((theme)=> ({
    icons: {
      color: '#000000'
    }
  }))

const RegisterUserForm = () => {
    // const {enqueueSnackbar} = useSnackbar()
    const classes = useStyles()
      const initialValues = {
          username : "" ,
          email: "", 
          password: "",
          confirmpassword: "",
          contact: "",
          address: "",
          geyserid: "",
          geysername: "",
          module : "",
          city : null,
          code : null,
          deviceid: "",
          devicelocation: "",
          };
          const formValidation = Yup.object({
              username: Yup.string()
              .required("Username is required")
              .min(4, 'User name must be greater than 4' ),
              email: Yup.string()
              .email("Email is Invalid")
              .required("Email is required"),
              password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be 8 characters long"),
              confirmpassword: Yup.string()
              .oneOf([Yup.ref('password'), null], "Password isn't same")
              .required("Confirm Password is required")
              .min(8, "Must be 8 characters long"),
              contact : Yup.string()
              .required("Contact is required")
              .max(11)
              .min(11),
              address: Yup.string()
              .required("Address is required"),
              geyserid: Yup.string()
              .required("Geyser ID is required")
              .min(8, 'Enter Valid Geyser Id')
              .max(16, 'Invalid Geyser ID'),
              geysername: Yup.string()
              .required("Geyser Name is required")
              .min(4, 'Enter Valid Geyser Name'),
              city: Yup.string()
              .required("Please Select Your City")
              .nullable(),
              module:Yup.string()
              .required("Please Select Module First"),
              deviceid: Yup.string()
              .required("Please Select Device I'd"),
              devicelocation : Yup.string()
              .required("Enter Device Location")

          })
          const [Loader ,setLoader] = useState({
            loading:false
          })
          const [showPassword, setShowPassword] = useState(false)
        const [showPassword1, setShowPassword1] = useState(false)
        // const dispatch = useDispatch()
        
        const handleShowPassword = () => {
          setShowPassword(!showPassword)
        }
        const handleShowPassword1 = () => {
          setShowPassword1(!showPassword1)
        }
        const [selectedModule, setSelectedModule] = React.useState('')
        const handleChange = (event) => {
          setSelectedModule(event.target.value);
        };
        // console.log(selectedModule)
       
  return (
    <div>
        <Formik
        initialValues={{...initialValues}}
        validationSchema = {formValidation}
        onSubmit={(values, {resetForm})=> {
          console.log(values)
          setLoader({
              ...Loader,
              loading : true
            })
        //   dispatch(register(values)).then(res => {
        //       setLoader({
        //           ...Loader,
        //           loading : false
        //         })
        //         enqueueSnackbar(res.res.data.message, {
        //           variant:'success'
        //         })
        //         resetForm({values: ''})
        //         // console.log(res.res.data.message)

        //   }
        //   )
      }
    }
        >
          <Form>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <FormControl fullWidth>
              
          <InputLabel id="demo-simple-select-filled-label"> Select Module</InputLabel>
          <Select 
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedModule}
          onChange={handleChange}
          placeholder="Hello Jee "
          >
            <MenuItem value="Geysital"> Geysital </MenuItem>
            <MenuItem value="Water Tank System"> Water Tank System </MenuItem>
            <MenuItem value="Fuel Monitoring System"> Fuel Monitoring System </MenuItem>

          </Select>
            </FormControl>

          </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <TextFieldComponent name="username" label="User Name" icon={<Person className={classes.icons}/>} /> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextFieldComponent name="email" label="Email ID"  icon={<Email className={classes.icons} />}/>   
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextFieldComponent name="password" label="Password"
      type={showPassword ? 'text' : 'password'}
      icon={<Lock className={classes.icons}/> } endIcon={
     <IconButton onClick={handleShowPassword}>
      {showPassword ? <Visibility />  : <VisibilityOff/>}
     </IconButton> 
      }/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextFieldComponent name="confirmpassword" label="Confirm Password"
      type={showPassword1 ? 'text' : 'password'}
      icon={<Lock className={classes.icons}/> }
      endIcon={
        <IconButton onClick={handleShowPassword1}>
         {showPassword1 ? <Visibility />  : <VisibilityOff/>}
        </IconButton> 
         }
      />
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
         <TextFieldComponent name="contact" label="Contact" placeholder="eg: 03012345678" icon={<Call className={classes.icons} />} />
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <SelectComponent    name="city" label="Select City" options={Cities} />
           </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <TextFieldComponent name="address" label="Address" icon={<HomeIcon className={classes.icons}/> } />
           
           </Grid>
           {selectedModule === 'Fuel Monitoring System' ? 
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <TextFieldComponent name="devicelocation" label="Device Location" icon={<PlaceIcon className={classes.icons}/> } />

            </Grid> : null
          }
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            {selectedModule === 'Geysital' ? 
            <TextFieldComponent name="geyserid" label="Geyser ID" icon={<QrCode2Icon className={classes.icons}/> } />
              :
            <TextFieldComponent name="deviceid" label="Device ID" icon={<QrCode2Icon className={classes.icons}/> } />
            
          }

           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <TextFieldComponent name="geysername" label="Geyser Name" icon={<ContentPasteIcon className={classes.icons} /> } />
           </Grid>
        </Grid>
          {
            Loader.loading ? (
              <Box sx={{mt:'2rem'}}>
              {/* <RotatingLines 
              strokeColor="blue"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
              /> */}
              </Box>
            ):
      <ButtonComponent > Register </ButtonComponent>
          }
           <Divider> <Typography> OR</Typography> </Divider>
        
             <Typography style={{marginTop:'0.5rem', textAlign:'center'}}>
                Already have account ? <Link to='/auth/login' style={{textDecoration:'none', letterSpacing:'0px', color:'#264252'}}> Login here</Link>
              </Typography>
      


          </Form>

        </Formik>
      
    </div>
  )
}

export default RegisterUserForm
