import {InputAdornment, Box, Grid,Typography, TextField, IconButton, styled, Button  } from '@mui/material'
import React from 'react'
import Page from '../../components/page/Page'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import RegisterUserForm from './components/RegisterUserForm';
const CenteredBox=styled(Box)(({theme})=> ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}))

const Register = () => {
  const initialValues = {
    email:'',
    password: '',

  }
  // const [open, setOpen]= React.useState(false)
const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    submitError: null
  });
  const [showPassword, setShowPassword] = React.useState(false)
const [formValues, setFormValues] = React.useState(initialValues) 
const handleChange =(e) => {

const {name, value} = e.target
setFormValues({...formValues, [name]: value})
}
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormValues(initialValues);
//   await dispatch(login(formValues, ip)).then((res)=>
  // enqueueSnackbar(res)
//   enqueueSnackbar(res.err.response.data, {
//     variant:'error'
//   })
//   );
}
const handleShowPassword =()=> {
setShowPassword(!showPassword)
}
  return (
    <Page title="Register">
      <Box>
        <Box style={{zIndex:'1', transform:'translate(-50%, -50%)', 
        position:'absolute', top:'50%', left:'50%', marginTop:'2rem', width:'70%',}}>
       <Grid container>
       <Grid item
        xs={6}
        md={6}
        xl={6}
        sx={{ borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px',
        backgroundImage:'url(/assets/images/register.jpg)',
        backgroundRepeat:'no-repeat', backgroundSize:'cover',
        position:'relative', backgroundPosition:'center'
    }}
        >
           <Box style={{ height:'100%', background:'rgba(0,0,0,0.3)'}} >
          {/* <Typography style={{color:'#ffffff', fontSize:'5rem', }}> Login</Typography> */}
          
          </Box> 
        </Grid>
       <Grid item
      
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} 
      style={{padding:'2rem',backgroundColor:'#ffffff', height:'80vh', boxShadow:'2px 2px 15px #e2e2e2 inset', borderTopRightRadius:'10px',
      overflowY:'scroll',
    
    borderBottomRightRadius:'10px'}}
      >
        <Box style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                <Box style={{height:'80px', width:'80px', background:'#264252', rotate:'45deg', boxShadow:'5px 5px 15px #4C5BB6',
                borderRadius:'10px', 
                display:'flex', justifyContent:'center', alignItems:'center'
              }}>
               <AppRegistrationIcon style={{rotate:'-45deg', fontSize:'3rem', color:'#ffffff'}} />
            
              </Box>
              
                </Box>
                <Typography style={{fontSize:'2rem', marginTop:'1rem', fontWeight:800,textAlign:'center' }}>
                  Register
                </Typography>
                <Typography sx={{textAlign:'center'}}>Sign Up on the internal platform</Typography>
        <Box style={{marginTop:'1rem', }}>
         <RegisterUserForm /> 
        </Box>
      </Grid>
        
        
       </Grid>
        </Box>
         </Box>
    </Page>
  )
}

export default Register
