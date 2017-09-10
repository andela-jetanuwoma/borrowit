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
    default:
      return state;
  }
}
