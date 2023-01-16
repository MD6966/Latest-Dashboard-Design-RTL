import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Typography, Grid } from '@mui/material';


const BottomBar = (props) => {
  return (
    <AppBar
    sx={{width:280, position:'sticky', top:'auto', bottom:0 }}

    >
         <Typography
            style={{textAlign: 'center', fontSize: '13px', color: '#505253'}}
            variant="outline"
          > Powered by <a href="https://www.esyncnsecure.com/">Sync & Secure</a></Typography>
      
    </AppBar>
  )
}

export default BottomBar
