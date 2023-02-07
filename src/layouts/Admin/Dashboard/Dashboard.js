import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './components/TopBar'
import {Box, styled} from '@mui/material'
import Gradients from '../../../utils/Gradients'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
const StyledRoot = styled('div')(({theme})=> ({
    backgroundImage: Gradients.Custom,
    minHeight:'100vh',
    padding:'3rem'
    
}))

const Dashboard = () => {
  const [progress, setProgress] = useState(100)

  return (
    <>
   <TopBar />
   <StyledRoot>
   <Outlet /> 
   <LoadingBar color='#f11946'
    loaderSpeed={1000}
    height={3}
    progress={progress} />
   </StyledRoot>
    </>
  )
}

export default Dashboard
