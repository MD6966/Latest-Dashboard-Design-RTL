import React from 'react'
import Header from '../Header'

const HybirdGeyserDashboard = (props) => {
  const {geyserhybrid} = props
  return (
    <div>
      <Header geyserhybrid={geyserhybrid} />  
    </div>
  )
}

export default HybirdGeyserDashboard
