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

export function acceptBorrowRequest(request) {
  return (dispatch) => {
    return axios.post('api/request/1/accept')
      .then(() => {
        dispatch(acceptRequestSuccessful(request));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export function getLeasedItems() {
  return (dispatch) => {
    return axios.get('api/requests/1/leased')
      .then((data) => {
        dispatch(getLeasedItemsSuccessful(data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
