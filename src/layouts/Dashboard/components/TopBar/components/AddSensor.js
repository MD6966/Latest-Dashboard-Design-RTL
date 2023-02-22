import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Card, TextField, Typography, Grid, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addSensor } from '../../../../../store/actions/userActions';
import { useSnackbar } from 'notistack';
import {RotatingLines  } from 'react-loader-spinner'

const AddSensor = (props) => {
  const inititalvalues = {
    geysername:'',
    boardId:'',
  }
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.auth.user)
  const {enqueueSnackbar} = useSnackbar()
  const user_id =user.id
  const [formValues, setFormValues] =React.useState(inititalvalues)
  const [loader, setLoader] = React.useState(false)
  const handleChange =(e)=> {
    e.persist();
    const {name, value} = e.target
    setFormValues({
      ...formValues, [name] : value
    })
    
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(formValues.boardId.length < 11 || formValues.boardId.length > 11 )
    {
      enqueueSnackbar('Board Id length must be equal to 11', {
        variant:'warning'
      })
    }
    else{
      setLoader(true)
      dispatch(addSensor(formValues, user_id)).then((res)=>
      {
        console.log(res)
        setLoader(false)
        enqueueSnackbar(res.res.data.message, {
          variant:'info'
        })
        setFormValues(inititalvalues)
        props.close() 
    }
    )
    }

      
    // console.log(formValues)
  }

  return (
    <div>
      <Dialog open ={props.open} onClose={props.close} fullWidth>
        <form onSubmit={handleFormSubmit}>

<DialogTitle>

   Add Sensor 
    <Divider /> 
</DialogTitle>
<DialogContent>
<Card elevation={5} style={{padding: '1rem', marginTop:'1rem'}}>
                <Typography gutterBottom style={{fontWeight:'bold'}}> Add Sensor </Typography>
                <Divider />
                <Grid container style={{marginTop:'1rem'}} spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label='Geyser Name' fullWidth required name='geysername' value={formValues.geysername} onChange={handleChange} /> 
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField label='Board-ID' fullWidth required name='boardId' value={formValues.boardId} onChange={handleChange}/>
                  </Grid>
                </Grid> 
              
              </Card> 
</DialogContent>
<DialogActions>
  <Button onClick={props.close} > Close</Button>
  {loader ? 
  <RotatingLines 
  strokeColor="blue"
  strokeWidth="5"
  animationDuration="0.75"
  width="30"
  visible={loader}
  /> 
  
  : 
    <Button variant='contained'  type='submit'> Add </Button>
  }
</DialogActions>
        </form>
</Dialog>
    </div>
  )
}

export default AddSensor
