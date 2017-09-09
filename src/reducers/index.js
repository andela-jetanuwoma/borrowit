import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import auth from './userReducer';

const rootReducer = combineReducers({
  auth,
  notifications,
  routing: routerReducer,
});

export default rootReducer;
