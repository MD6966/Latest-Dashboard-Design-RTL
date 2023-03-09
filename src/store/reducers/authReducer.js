const initialState = {
    isAuthenticated: null,
    isLoading: false,
    token : localStorage.getItem('token'),
    isRegistered: null,
    error: null,
    user: null, 
}

const authReducer = (state=initialState, action) => {
switch(action.type) {

    // case "LOGIN" : {
    //     return {
    //         ...state,
    //         ...action.payload,
    //         isAuthenticated : true,
    //         isLoading : false
    //     }
    // }
    case 'USER_LOADING':
  return {
    ...state,
    isLoading: true
  };
  case 'USER_LOADED':
    // console.log(action.payload)
    return {
      ...state,
      isAuthenticated: true,
      isLoading: false,
      user: action.payload
    };
    case 'LOGIN_SUCCESS': {
        localStorage.setItem('token', action.payload.token);
    
        return {
            ...state,
            ...action.payload,
            isLoading: false,
            isAuthenticated: true

        }
    };
    // case 'LOGOUT_SUUCCESS' : {
    //     localStorage.removeItem('token')
    //     return {
    //         token: null,
    //         user: null,
    //         isAuthenticated: null,
    //         isLoading: false
    //       };
    // };
     case 'ADMIN_LOGOUT_SUCCESS' : {
        localStorage.removeItem('token')
        return {
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
          };
    };
    
    case 'REGISTER_SUCCESS':
  return {
    ...state,
    isRegistered: true,
    isLoading: false
  };
  case 'REGISTER_FAIL':
    case 'AUTH_ERROR':
      case 'LOGIN_FAIL':
        case 'LOGOUT_SUUCCESS' :
    localStorage.removeItem('token');
    return {
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
     
    };
    case 'USER_PICTURE_UPLOAD' : 
    return {
      ...state,
      user: {
        ...state.user,
        profilePic: action.payload
      }
    };
    default :  return state
    
}

}

export default authReducer