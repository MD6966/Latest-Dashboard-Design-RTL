import React from 'react'
import Header from './header/Header'
import Body from '../../views/LandingPage/Body'
import Features from '../../views/LandingPage/Features/Features'
import Footer from '../../views/LandingPage/Footer/Footer'
import Page from '../../components/page/Page'
const LandingPageLayout = () => {
  return (
    <Page
    title="Rubitron IoT Dashboard">
     <Header />
     <Body /> 
     <Features />
     <Footer /> 
    
    </Page>
  )
}

export default LandingPageLayout
