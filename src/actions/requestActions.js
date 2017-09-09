import axios from '../utils/axiosSetup';
import toastr from 'toastr';
import actionTypes from '../constants';


export function getBorrowRequestsSuccessful(requests) {
  return {
    type: actionTypes.GET_BORROW_REQUEST_SUCCESS,
    requests
  }
}

export function getBorrowRequests() {
  return (dispatch) => {
    return axios.get('api/requests')
      .then((data) => {
        console.log(data.data);
        dispatch(getBorrowRequestsSuccessful(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}