import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, 
    Typography,TextField,
    Grid,Card, CircularProgress
    } from '@mui/material'
    import React from 'react'
    import SettingsIcon from '@mui/icons-material/Settings';
    import { useDispatch, useSelector } from 'react-redux';
    import { changePassword } from '../../../../../store/actions/userActions';
    import { useSnackbar } from 'notistack';
    import { RotatingLines } from 'react-loader-spinner';
    const Settings = (props) => {
      const initialValues = {
        password:'',
        confirm_password:''
      }
      const user = useSelector((state)=> state.auth.user)
      const user_id = user.id
      const dispatch = useDispatch()
      const {enqueueSnackbar} = useSnackbar()
      const [formValues, setFormValues] = React.useState(initialValues)
      const [loader, setLoader] = React.useState(false)
      const handleChange = (e) => {
          const {name , value} = e.target
          setFormValues({
            ...formValues, [name]:value
          })
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)
        dispatch(changePassword(formValues, user_id)).then((res) => {
          setLoader(false)
          enqueueSnackbar(res.res.data.message, {
            variant:'info'
          })
          setFormValues(initialValues)
        })
    
      }
      return (
        <div>
          <Dialog open ={props.open} onClose={props.close} fullWidth>
            <form onSubmit={handleSubmit} >
    
    <DialogTitle>
    
        <SettingsIcon style={{minWidth:'3rem', marginBottom:'-0.30rem'}}/> 
        Settings
        <Divider /> 
    </DialogTitle>
    <DialogContent>
    <Card elevation={5} style={{padding: '1rem', marginTop:'1rem'}}>
                    <Typography gutterBottom style={{fontWeight:'bold'}}> Change Password </Typography>
                    <Divider />
                    <Grid container style={{marginTop:'1rem'}} spacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField label='Old Password' fullWidth name='password' value={formValues.password} onChange={handleChange} required /> 
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField label='New Password' fullWidth name='confirm_password' value={formValues.confirm_password} required onChange={handleChange}/>
                      </Grid>
                    </Grid> 
                  
                  </Card>
    
                
    </DialogContent>
    <DialogActions>
        <Button onClick={props.close}> Close</Button>
        {
          loader ? 
          
          <RotatingLines 
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"
            visible={loader}
            />  
          
          : 
          
          <Button variant='contained' type='submit'  > Change Password</Button>
        }
        
    </DialogActions>
            </form>
    </Dialog>
        </div>
      )
    }
    
    export default Settings
    