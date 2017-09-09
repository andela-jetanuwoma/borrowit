/* global localStorage */
import { setLoggedInUser } from '../actions/userActions';

export default (store) => {
   const getData = localStorage.getItem('x-saved-user');
  if (getData && getData !== 'undefined') {
      const user = JSON.parse(getData);
      store.dispatch(setLoggedInUser(user));
  }
};
