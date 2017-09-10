import axios from '../utils/axiosSetup';
import actionTypes from '../constants';


export function getBorrowRequestsSuccessful(requests) {
  return {
    type: actionTypes.GET_BORROW_REQUEST_SUCCESS,
    requests
  }
}

export function sendBorrowRequestSuccess(item) {
  return {
    type: actionTypes.SEND_BORROW_REQUEST_SUCCESS,
    item
  }
}

export function getBorrowRequests() {
  return (dispatch) => {
    return axios.get('/api/requests')
      .then((data) => {
        dispatch(getBorrowRequestsSuccessful(data.data));
      })
      .catch((error) => {
      });
  }
}

export function sendBorrowRequest(item) {
  return (dispatch) => {
    return axios.post('/api/request', item)
      .then((data) => {
        dispatch(sendBorrowRequestSuccess(data));
      })
      .catch((error) => {

      });
  }
}