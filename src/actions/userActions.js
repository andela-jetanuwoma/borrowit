import { instance as axios } from '../utils/axiosSetup';
import actionTypes from '../constants';

export function setLoggedInUser(user) {
  return {
    type: actionTypes.LOGIN_USER,
    user,
   }
}

export function getUserInformation() {
  return (dispatch) => {
    return axios.get('/users/me')
      .then((user) => {
        dispatch(setLoggedInUser(user));
      })
      .catch((error) => {
        console.log(error, ' my error')
      })
  }
}
