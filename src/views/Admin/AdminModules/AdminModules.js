import { Container, Grid } from '@mui/material'
import React from 'react'
import AdminModulesCards from './components/AdminModulesCards'

const AdminModules = () => {
  const ModulesData = [
    { title: 'Geysital', to:'geysital', image:'geysital.jpg' },
    { title: 'Fuel System', to:'fuel', image:'fuel.jpg' },
    { title: 'ProtoGen', to:'protogen', image:'gen.jpg' },
    { title: 'ProtoGen', to:'protogen', image:'gen.jpg' },
    { title: 'ProtoGen', to:'protogen', image:'gen.jpg' },
    { title: 'Geysital', to:'geysital', image:'geysital.jpg' },
    { title: 'Fuel System', to:'fuel', image:'fuel.jpg' },
    { title: 'ProtoGen', to:'protogen', image:'gen.jpg' },
    { title: 'Geysital', to:'geysital', image:'geysital.jpg' },
    { title: 'Fuel System', to:'fuel', image:'fuel.jpg' },
    { title: 'ProtoGen', to:'protogen', image:'gen.jpg' },




  ]
  return (
    <Container sx={{p: 5}}>
    <Grid container spacing={3}>
      {ModulesData.map((val)=> {
        return(
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <AdminModulesCards title={val.title} to={val.to} image={val.image} /> 
           </Grid>
        )
      })
      
      }
    
    </Grid>
    </Container>
  )
}

export default AdminModules
