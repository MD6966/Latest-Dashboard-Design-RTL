import { Avatar, Box, Button, Card, CardActions, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import {uploadPicture} from '../../../../../store/actions/userActions'
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
const ViewProfile = (props) => {
  const [picture, setPicture] = React.useState({
    filename: 'Choose File',
    file: null
  })
  const user = useSelector((state)=> state.auth.user)
  // console.log(user.profilePic)
  const dispatch = useDispatch();
  const handleChange = (e) => {
  
    setPicture({
      filename: e.target.files[0].name,
      file: e.target.files[0]
    });
     
  }
  
  const handleUpload = () => {
    dispatch(uploadPicture(picture.file, user.id))

  }
  // console.log(user)
  return (
    <div>
      <Dialog open ={props.open} onClose={props.close} fullWidth>

        <DialogTitle>

            <PersonIcon style={{minWidth:'3rem', marginBottom:'-0.30rem'}}/> 
            View Profile
            <Divider /> 
        </DialogTitle>
        <DialogContent>
            <Box >
              <Card elevation={5} style={{padding: '1rem'}}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center'}}>  
                  <Avatar style={{height:'100px', width:'100px'}} src={`${process.env.REACT_APP_URL}${user.profilePic}`} /> 
                   </Box>
                 <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <Typography variant='h4' style={{ fontWeight:'bold'}}> {user.name}</Typography>
                 </Container>
                 <Box style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <CardActions>
                     <Button>
                     <label htmlFor='img'>
                      {picture.filename}
                     </label>
                     </Button>
                      <input id='img' type='file' style={{display:'none'}} onChange={handleChange} />
                    
                     
                      <Button variant= {picture.file ? 'contained' : 'disabled'}
                    onClick={handleUpload}
                    > Upload</Button>
                    
                    
                      </CardActions>
                 </Box>
                

              </Card>

              <Card elevation={5} style={{padding: '1rem', marginTop:'1rem'}}>
                <Typography gutterBottom style={{fontWeight:'bold'}}> Profile </Typography>
                <Divider />
                <Grid container style={{marginTop:'1rem'}} spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField fullWidth value={user.name} label='Name'/> 
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField fullWidth value={user.email} label='E-mail'/>
                  </Grid>
                </Grid> 
              </Card>

            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.close} > Close</Button>
            <Button variant='contained' onClick={props.close}> Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ViewProfile
