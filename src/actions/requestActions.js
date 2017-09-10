import { instance as axios } from '../utils/axiosSetup';
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
    item,
  }
}

export function acceptRequestSuccessful(request) {
  return {
    type: actionTypes.ACCEPT_REQUEST_SUCCESS,
    request,
  }
}

export function getLeasedItemsSuccessful(items) {
  return {
    type: actionTypes.GET_LEASED_ITEMS_SUCESS,
    items
  }
}

export function getBorrowRequests() {
  return (dispatch) => {
    return axios.get('/requests')
      .then((data) => {
        console.log(data, ' get request');
        dispatch(getBorrowRequestsSuccessful(data.data));
      })
      .catch((error) => {
      });
  }
}

export function sendBorrowRequest(item) {
  return (dispatch) => {
    return axios.post('/requests', item)
      .then((data) => {
        console.log(data, ' send request');
        dispatch(sendBorrowRequestSuccess(item));
      })
      .catch((error) => {

      });
  }
}

export function acceptBorrowRequest(request) {
  return (dispatch) => {
    return axios.post(`/requests/${request.id}/accept`)
      .then(() => {
        dispatch(acceptRequestSuccessful(request));
      })
      .catch((error) => {
      });
  }
}

export function getLeasedItems() {
  return (dispatch) => {
    return axios.get('/requests/leased')
      .then((data) => {
        console.log(data, ' get leased');        
        dispatch(getLeasedItemsSuccessful(data.data));
      })
      .catch((error) => {
      })
  }
}
