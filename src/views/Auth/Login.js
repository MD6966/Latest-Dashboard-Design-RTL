import {InputAdornment, Box, Grid,Typography, TextField, IconButton, Divider, styled, Button  } from '@mui/material'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Page from '../../components/page/Page'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import DialogueComponent from './components/DialogueComponent';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {RotatingLines  } from 'react-loader-spinner'
import { login } from '../../store/actions/authActions';

const CenteredBox=styled(Box)(({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))
const Login = () => {
  const initialValues = {
    email:'',
    password: '',
    
  }
  const [formState, setFormState] = React.useState({
      isValid: false,
      values: {},
      touched: {},
      errors: {},
      submitError: null
    });

      const navigate = useNavigate()
      const dispatch = useDispatch()
      const [ip, setIp]=useState(null)
      const [open, setOpen]= React.useState(false)
      const [showPassword, setShowPassword] = React.useState(false)
      const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)
      // const isLoading = useSelector((state) => state.auth.isLoading)
      const [isLoading, setLoading] = React.useState(false)
      const {enqueueSnackbar} = useSnackbar()

      useEffect(() => {
        axios.get('https://api.ipify.org?format=json').then((data) => {
          setIp(data.data.ip);
          
        });
      }, []);
  const handleClose=()=> {
    setOpen(false)
  }
  const [formValues, setFormValues] = React.useState(initialValues) 
  const handleChange =(e) => {
    
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
  const handleSubmit = async (e) => {
    setLoading(true)
      e.preventDefault();
      await dispatch(login(formValues, ip)).then((res)=>
      // alert(res.err.response.data)
      {
        setLoading(false)
       enqueueSnackbar(res.err.response.data, {
        variant:'error'
      })
      }
      )
      // setFormValues(initialValues);
  }
  const handleShowPassword =()=> {
    setShowPassword(!showPassword)
  }
  if (isAuthenticated)
   {
    return(navigate('/dashboard/geyser_hybrid', {replace: true}))
   }
  return (
    <Page
    title="Login">
      <Box>
        <Box style={{zIndex:'1', transform:'translate(-50%, -50%)', 
        position:'absolute', top:'50%', left:'50%', marginTop:'2rem', width:'60%',}}>
       <Grid container>
       <Grid item
      
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} 
      style={{padding:'2rem',backgroundColor:'#ffffff', height:'80vh', boxShadow:'2px 2px 15px #e2e2e2 inset', borderTopLeftRadius:'10px',
    
    borderBottomLeftRadius:'10px'}}
      >
        <Box style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                <Box style={{height:'80px', width:'80px', background:'#264252', rotate:'45deg', boxShadow:'5px 5px 15px #4C5BB6',
                borderRadius:'10px', 
                display:'flex', justifyContent:'center', alignItems:'center'
              }}>
               <LockIcon style={{rotate:'-45deg', fontSize:'3rem', color:'#ffffff'}} />
            
              </Box>
              
                </Box>
                <Typography style={{fontSize:'2rem', marginTop:'1rem', fontWeight:800,textAlign:'center' }}>
                  LOG IN 
                </Typography>
                <Typography sx={{textAlign:'center'}}>Sign in on the internal platform</Typography>
        <Box style={{marginTop:'1rem', }}>
          <form onSubmit={handleSubmit}>
          <TextField 
           fullWidth
            required
           label="Email address"
           name="email"
           onChange={handleChange}
           value={formValues.email}
           variant="standard"
           style={{marginBottom:'1rem'}}
           InputProps={{
            
            startAdornment: (
              <InputAdornment position="start">
                  <Email style={{color:'#000000'}}/> 
              </InputAdornment>
            ),
          }}
          />
          <TextField 
          fullWidth
          required
          label="Password"
          name="password"
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          value={formState.password}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                 <Lock style={{color:'#000000'}} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                {showPassword ? <Visibility />  : <VisibilityOff/>}
                  </IconButton> 
              </InputAdornment>
            )
          }}
          
          />
          <Typography
          onClick={()=> setOpen(true)}
          style={{textAlign:'right', fontWeight:'bold', fontSize:'0.8rem', color:'#264252', cursor:'pointer',  
          marginTop:'0.5rem'
        }}
         
          > Forgot Password?</Typography>
         
          {
            isLoading ? 
            <CenteredBox>

            <RotatingLines
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={isLoading}/>  
            </CenteredBox> : 
            <CenteredBox>

          <Button 
            type='submit'
            variant='contained'
            style={{
                backgroundColor:'#264252'
            }}
            > Login</Button>
            </CenteredBox> 
          }
          </form>
          <DialogueComponent open={open} close={handleClose} />
          {/* <LoginForm />  */}
        </Box>
        <Box style={{marginTop:'2%',}}>

           <Divider> <Typography> OR</Typography> </Divider>
           
          <Typography sx={{textAlign:'center', mt:'2rem'}}> New User? 
            <Link to='/auth/register' style={{textDecoration:'none', fontWeight:'bold', color:'#264252',}}> Register Here</Link>
           </Typography>
        </Box>
      </Grid>
        <Grid item
        xs={6}
        md={6}
        xl={6}
        sx={{ borderTopRightRadius:'10px', borderBottomRightRadius:'10px',
        backgroundImage:'url(/assets/images/login.jpg)',
        backgroundRepeat:'no-repeat', backgroundSize:'cover',
        position:'relative', backgroundPosition:'center'
    }}
        >
           <Box style={{ height:'100%', background:'rgba(0,0,0,0.3)'}} >
          {/* <Typography style={{color:'#ffffff', fontSize:'5rem', }}> Login</Typography> */}
          
          </Box> 
        </Grid>
        
       </Grid>
        </Box>
         </Box>  
    
         
    
    </Page>
  )
}

export default Login
