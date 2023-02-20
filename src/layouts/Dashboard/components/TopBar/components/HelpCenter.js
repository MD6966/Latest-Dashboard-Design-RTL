import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField, Typography } from '@mui/material'
import { complaint } from '../../../../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const HelpCenter = (props) => {
  const [complaintMessage, setComplaintMessage] = React.useState()
  const [loader, setLoader] = React.useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.auth.user)
  const id = user.id
//   const {enqueueSnackbar} = useSnackbar()
  const username = user.name
  const handleChange = (e) => {
    setComplaintMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    dispatch(complaint(complaintMessage, id, username)).then((res)=>{
      setLoader(false)
    //   enqueueSnackbar(res.res.data.message, {
    //     variant:'success'
    //   })
      setComplaintMessage("")
    } 
    )      
   

  }
  return (
    <div>
        <Dialog open ={props.open} onClose={props.close} fullWidth>
        <form onSubmit={handleSubmit}>
<DialogTitle>

    <InfoIcon style={{minWidth:'3rem', marginBottom:'-0.30rem'}}/> 
    Complaint 
    <Divider /> 
</DialogTitle>
<DialogContent>
    <Typography gutterBottom>
    Please tell us about the issue in a clear way. Our agent will get back to you as soon as possible
        </Typography> 

        <TextField fullWidth 
        label='Message'
        name='complaint'
        value={complaintMessage}
        onChange={handleChange}
        required
        /> 
</DialogContent>
<DialogActions>
    <Button onClick={props.close} > Close</Button>
    <Button variant={loader ? 'disabled' : 'contained'} type='submit'> {loader ? <CircularProgress size='1.5rem' /> : 'Send' } </Button>
</DialogActions>
        </form>
</Dialog>
      
    </div>
  )
}

export default HelpCenter
