import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography, Box, CircularProgress } from '@mui/material'
import { forgetPassword } from '../../../store/actions/authActions'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
const DialogueComponent = ({open, close}) => {
    const [email, setEmail] = React.useState()
  const [loader, setLoader] = React.useState(false)
  const dispatch = useDispatch()
  const enqueueSnackbar = useSnackbar()
  const handleChange = (e) => {
    setEmail(e.target.value)
}
const handleSubmit = (e) => {
    setLoader(true)
    e.preventDefault()
    dispatch(forgetPassword(email)).then((res)=> {
      setEmail('')
      setLoader(false)
      // enqueueSnackbar(res.res.data.message, {
      //   variant:'success'
      // })
      alert(res.res.data.message)
      close()

    })
  }
  return (
    <div>
      <Dialog open={open} onClose={close} fullWidth>
        <DialogTitle> Forgot Password
        </DialogTitle>
         
        <DialogContent>
          <form onSubmit={handleSubmit}>

           <Typography gutterBottom> Enter Your email below:</Typography>
           <TextField placeholder='abc@example.com' fullWidth variant='standard' required type='email' name='email' value={email} onChange={handleChange} /> 
           <Box style={{marginTop:'2rem', justifyContent:'flex-end', display:'flex'}}>
        
                <Button onClick={close}> Cancel</Button>
                <Button variant={loader ? 'disabled' : 'contained'} type='submit'>{loader ? <CircularProgress size='1.5rem'/> : 'Forget'}</Button>
            
           </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogueComponent
