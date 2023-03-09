import axios from "axios"


export const adminLogOut = () => (dispatch) =>
dispatch({
  type: 'ADMIN_LOGOUT_SUCCESS'
});