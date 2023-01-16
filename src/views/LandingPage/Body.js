import React from 'react'
import {Grid, Box, Typography, Button, styled} from '@mui/material'
import Lottie from 'react-lottie'
import tech from '../../assets/LottieFiles/Tech.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
const StyledButton2 = styled(Button)(({theme})=> ({
    backgroundColor:'#CDCECF',
   color:'#17434D',
   borderRadius:'20px',
   marginTop:'2rem',
   width:'10rem',
   '&:hover' : {
     backgroundColor:'#505254',
     color:'#fff',
   }
}))

const Body = () => {
  React.useEffect(() => {
    AOS.init({duration:2000});
  }, [])
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: tech,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div>
       <div  style={{height:'100vh', backgroundImage:'url(/assets/images/t.jpg)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
     position:'relative',
    }}>
     
     <div
        style={{
          position: 'absolute',
          zIndex: 2,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
         
        }}
      >
        <Grid container sx={{pt:'4rem'}} >
          <Grid item
          data-aos="fade-up"
          xs={6}
          md={6}
          lg={6}
          sx={{height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }}
          >
            <Box sx={{pl:'3rem'}}>
            <Typography variant='h2' sx={{color:'#CDCECF', fontWeight:800}}> Rubitron IoT Dashboard </Typography>
            <Typography variant='h6' sx={{color:'#CDCECF',}}>
            A professionally Built dashboard that is developed with one common goal in mind, 
            to help you monitor your IoT devices with ease.Built with the latest UI / UX technologies.
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

           
            <StyledButton2>
              Get Started Now  
            </StyledButton2>
             
            </Box>
            </Box>
          </Grid>
          <Grid item
          xs={6}
          md={6}
          lg={6}
          >
            <Lottie options={defaultOptions}
              height="90vh"
              width="45vw"/>
          </Grid>
        </Grid>
      </div>
      </div>
    </div>
  )
}

export default Body
