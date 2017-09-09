import axios from 'axios';
import actionTypes from '../constants';

export function setLoggedInUser(user) {
  return {
    type: actionTypes.LOGIN_USER,
    user,
   }
}

export function loginUser() {
  return (dispatch) => {
    const user = { fullName: 'Test User', email: 'someemail@mail.com', slackHandle: '@wapjude', id: '490340344' };
    dispatch(setLoggedInUser(user));
    localStorage.setItem('x-saved-user', JSON.stringify(user));
    console.log(user);
  }
}