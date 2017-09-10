import axios from 'axios';
import actionTypes from '../constants';

export function setLoggedInUser(user) {
  return {
    type: actionTypes.LOGIN_USER,
    user,
   }
}
