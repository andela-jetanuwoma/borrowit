import initialState from './initialState';
import actionTypes from '../constants';

export default function borrowRequests(state = initialState.borrowRequests, action) {
  switch(action.type) {
    case actionTypes.GET_BORROW_REQUEST_SUCCESS:
      return {
        ...state,
        requests: [...action.requests]
      }

    default:
      return state;
  }
}