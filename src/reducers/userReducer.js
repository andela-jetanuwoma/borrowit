import isEmpty from 'lodash/isEmpty';
import actionTypes from '../constants';
import initialState from './initialState';

export default function userReducer(state = initialState.auth, action) {
  switch(action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: !isEmpty(action.user),
        error: {},
      };
<<<<<<< HEAD


=======
>>>>>>> da26a38693af474de647a60114a03b0b087af309
    default:
      return state;
  }
}
