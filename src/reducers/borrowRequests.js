import initialState from './initialState';
import actionTypes from '../constants';

export default function borrowRequests(state = initialState.borrowRequests, action) {
  switch(action.type) {
    case actionTypes.GET_BORROW_REQUEST_SUCCESS:
      return {
        ...state,
        requests: [...action.requests]
      }

    case actionTypes.SEND_BORROW_REQUEST_SUCCESS:
      return {
        ...state,
        requests: [...state.requests, action.item],
        myRequests: [...state.myRequests, action.item]
      };
      
    case actionTypes.ACCEPT_REQUEST_SUCCESS:
      return {
        ...state,
        requests: state.requests.filter(({ id }) => id !== action.request.id),
        leasedItems: [...state.leasedItems, action.request]
      }

    case actionTypes.GET_LEASED_ITEMS_SUCESS:
      return {
        ...state,
        leasedItems: [...action.items],
      }
    default:
      return state;
  }
}