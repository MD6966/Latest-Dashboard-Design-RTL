import axios from "axios"

export const login = ({email, password},ip) => async(dispatch) =>  {
  dispatch({
    type: 'USER_LOADING'
  });
    const config = {
        headers: {
          'Content-type': 'Application/json'
        }
      };
    const body = JSON.stringify({
        email, 
        password,
        ip 
    })
    
   

    try {
      const data = await axios.post('https://hybrid.testserver.rubitronlabs.org/user/login',
        body,
        config
      );
    
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data.data
      });
      // console.log(data.data)
      // dispatch({
      //   type: 'USER_LOADED',
      //   payload: data.data
      // });
      
    }
    catch (err) {
            // console.log(err.response.data)
            dispatch({
              type: 'AUTH_ERROR',
              message: err.response.data,
              id: 'LOGIN_FAIL',
              status: err.response.status
            });
            
    return {
     err
  }
    }


}

export const logout = () => (dispatch) =>
  dispatch({
    type: 'LOGOUT_SUUCCESS'
  });
  
  export const makeConfig = async (type) => {
    const token = await localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': type,
        auth: token
      }
    };
  
    return config;
  };


  export const  register = (formValues) =>async (dispatch)=>{
    const config =await makeConfig('application/json');
    const name = formValues.username;
    const email = formValues.email;
    const password = formValues.password;
    const phone_no = formValues.contact;
    const city = formValues.city;
    const address = formValues.address;
    const board_id = formValues.geyserid;
    const geyser_name = formValues.geysername;
    const dashboards = [formValues.module]; 
    var compName = (formValues.code === 'sns' ? 'sync and secure'  : 'cannon' )
    
    const body ={
        
                name,
                email,
                password,
                phone_no,
                city,
                address,
                board_id,
                geyser_name,
                dashboards, 
                compName,
    };
    console.log('ACTION', body)
    try{
      const res = await axios.post(`${process.env.REACT_APP_URL}user/register`,body, config);
      dispatch({
              type: 'REGISTER_SUCCESS'
            });
    return{
      res
    }
  }
  catch(err){
    console.log(err);
    dispatch({
            type: 'GET_ERRORS',
            message: err.response.data,
            id: 'REGISTER_FAIL',
            status: err.response.status
          });
        return {
          err
        }
  }
  };
  
export const auth = () => async (dispatch) => {
  const config = await makeConfig('Application/json');

  try {
    const user = await axios.get(
      `${process.env.REACT_APP_URL}user/auth`,
      config
    );
    dispatch({
      type: 'USER_LOADED',
      payload: user.data
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR'
    });
  }
};

export const forgetPassword = (value) => async() => {
  const email = value
  const body = {
    email
  }
  try {
      const res = await axios.post(`${process.env.REACT_APP_URL}user/forgotPass`,body)
      return{
        res
      }
  }
  catch(err) {
    console.log(err)
  }
}