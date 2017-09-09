import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './stores/configureStore';
import routes from './routes';
import checkAuth from './utils/checkAuth';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

checkAuth(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
