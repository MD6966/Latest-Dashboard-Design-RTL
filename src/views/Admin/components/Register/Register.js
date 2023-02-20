import { Box, Typography } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'
import RegisterUserForm from '../../../Auth/components/RegisterUserForm'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



const Register = () => {
  return (
    <Page
    title="Register"
    >
      <Box sx={{minHeight:'100vh'}}>
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
                <Typography sx={{textAlign:'center', mb:'2rem'}}>Sign Up on the internal platform</Typography>
        <RegisterUserForm display="none"/> 
      </Box>
    </Page>
  )
}

export default Register
