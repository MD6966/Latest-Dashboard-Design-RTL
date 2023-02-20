import { makeConfig } from "./authActions";
import axios from 'axios'

export const uploadPicture = (file, id) => {
console.log(file)
 
    return async (dispatch, getState) => {
      const config = await makeConfig('multipart/form-data');
  
      const formdata = new FormData();
      formdata.append('file', file);
      formdata.append('id', id);
  
      axios
        .post(`${process.env.REACT_APP_URL}user/upload`, formdata, config)
        .then((res) => {
          console.log(res)
          dispatch({
            type: 'USER_PICTURE_UPLOAD',
            payload: res.data.filepath
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const addSensor = (values, user_id) => async(dispatch) => {
    const config =await makeConfig('application/json');
    const  geyser_id= values.boardId
    const  geyser_Name =values.geyserName
    const body ={
      geyser_id,
      geyser_Name,
    };

    try {
        const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/add/${user_id}`, body, config)
        return {
          res
        }
    }
    catch (err) {
        console.log(err)
    }
  }

  export const changePassword = (values, user_id) => async() =>{
    const id = user_id
    const password = values.password
    const newPassword = values.confirm_password

    const body = {
      id, 
      password,
      newPassword
    }
    try{
        const res = await axios.post(`${process.env.REACT_APP_URL}user/changePassword`,body)
        console.log(res)
        return{
          res
        }
    }
    catch(err) {
      console.log(err)
      return {
        err
      }

    }

  }

  export const complaint = (complaint,id, name) => async () => {
    const body = {
      complaint,
      name,
      id,
    }

    try {
        const res = await axios.post(  `${process.env.REACT_APP_URL}user/fileComplaint`,body,)
        return {
          res
        }
    }
    catch (err) {
      console.log(err)
    }
    // console.log(body)

  }

