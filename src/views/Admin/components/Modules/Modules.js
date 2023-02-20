import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Divider, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'

const Modules = () => {
  const [dashboard, setDashboard] = React.useState('')
  const handleChange = (e) => {
    setDashboard(e.target.value)
  }
  return (
    <Page
    title="Modules"
    >
      <Box sx={{minHeight:'100vh'}}>
        <Typography variant='h3' sx={{mb:'2rem'}}> Module List </Typography>
        <Box sx={{display:'flex'}}>
          <Box sx={{width:'60%'}}>
          <FormControl fullWidth>
           <InputLabel> Select Dashboard </InputLabel>
            <Select
            value={dashboard}
            label="Dashboard"
            onChange={handleChange}
            >
              <MenuItem value={1}> Hello Jee</MenuItem>
              <MenuItem value={2}> Hello Jee</MenuItem>
              <MenuItem value={3}> Hello Jee</MenuItem>
              <MenuItem value={4}> Hello Jee</MenuItem>
              <MenuItem value={5}> Hello Jee</MenuItem>
              <MenuItem value={6}> Hello Jee</MenuItem>

             
            </Select>
          </FormControl>
            </Box>
            <Box sx={{width:'40%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Button variant='outlined'> Create Module </Button>
            </Box>
        </Box>
        <Typography variant='h3' sx={{m:'2rem 0'}}> Add Module To User </Typography>

        <Box>
          <Card>
          <CardHeader title="Macro Settings" />
            <Divider /> 
            <CardContent>
              <Grid container 
              spacing={3}
              >
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                  <FormControl fullWidth>
           <InputLabel> Select Dashboard </InputLabel>
            <Select
            value={dashboard}
            label="Dashboard"
            onChange={handleChange}
            >
              <MenuItem value={1}> Hello Jee</MenuItem>
              <MenuItem value={2}> Hello Jee</MenuItem>
              <MenuItem value={3}> Hello Jee</MenuItem>
              <MenuItem value={4}> Hello Jee</MenuItem>
              <MenuItem value={5}> Hello Jee</MenuItem>
              <MenuItem value={6}> Hello Jee</MenuItem>

             
            </Select>
          </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <TextField label="User ID" helperText="Enter User ID" fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                  <TextField label="Module ID" helperText="Enter Module ID" fullWidth />
                  </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions sx={{float:'right'}}>
              <Button variant='contained' > Submit </Button>
            </CardActions>
          </Card>
        </Box>

      </Box>
    </Page>
  )
}

export default Modules
