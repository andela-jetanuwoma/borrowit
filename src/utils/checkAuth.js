/* global localStorage */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setLoggedInUser } from '../actions/userActions';

export default (store) => {
   const getData = localStorage.getItem('x-saved-user');
  if (getData && getData !== 'undefined') {
      const user = JSON.parse(getData);
      store.dispatch(setLoggedInUser(user));
  }
};
