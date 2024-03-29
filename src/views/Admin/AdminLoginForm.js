import React from 'react'
import { Stack, TextField, styled, Button } from '@mui/material'
import { adminLogin } from '../../store/actions/authActions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
const StyledButton = styled(Button)(({theme})=> ({
    margin:'10px 0',
    background:'#264252',
    '&:hover' : {
        background:'#357ea5'
    }
}))

const AdminLoginForm = () => {
    const inititalValues = {
       username:"",
        password:""
    }
    const dispatch = useDispatch()
    const [formValues, setFormValues]=React.useState(inititalValues)
    const [ip, setIp] = useState(null);
    const [loading, setLoading] = useState(false)
    const isAuthenticated = useSelector(
      (state) => state.admin.isAdminAuthenticated
    );
    const isLoading = useSelector((state) => state.admin.isLoading);
    useEffect(() => {
      axios.get('https://api.ipify.org?format=json').then((data) => {
        setIp(data.data.ip); 
      });
    }, []);
    const handleChange =(e) => {
        const {name , value} = e.target
        setFormValues({...formValues, [name]: value});
        
      };
    const handleSubmit = async (e) => {
      setLoading(true)
        e.preventDefault()
        await dispatch(adminLogin(formValues, ip))
        setLoading(false)
        setFormValues(inititalValues)
    }
    if(isAuthenticated) {
      return(<Navigate to="/admin/users" replace={true} />)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

        <Stack>
       <TextField label='User Name' sx={{mb:'1rem', width:'350px',}} 
       name='username'  value={formValues.username} onChange={handleChange} required/>
        <TextField label='Password' sx={{mb:'1rem', width:'350px',}} 
        name='password' value={formValues.password} onChange={handleChange} required type="password"/>
        {
          loading ? <StyledButton type='submit' variant='disabled'>    <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={isLoading}/> </StyledButton> :
          <StyledButton type='submit' sx={{color:'#fff'}}> Login </StyledButton>
        }
        
        </Stack>
        </form>
                    
    </div>
  )
}

export default AdminLoginForm
