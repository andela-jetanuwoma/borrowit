import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from './stores/configureStore';
import routes from './routes';
import checkAuth from './utils/checkAuth';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './utils/axiosSetup';
import { setLoggedInUser } from './actions/userActions';

(function() {
  if (localStorage['x-borrowIt-auth']) {
    setAuthorizationToken(
      localStorage['x-borrowIt-auth']
    );
    store.dispatch(setLoggedInUser(
      localStorage['x-borrowIt-auth']
    ));
  }
}());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
