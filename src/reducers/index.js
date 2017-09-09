import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import auth from './userReducer';
import borrowRequests from './borrowRequests';

const rootReducer = combineReducers({
  auth,
  borrowRequests,
  notifications,
  routing: routerReducer,
});

export default rootReducer;
