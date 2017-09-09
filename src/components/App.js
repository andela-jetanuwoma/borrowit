import React from 'react';
import PropTypes from 'prop-types';
import Header from './commons/Header';
import '../assets/styles/style.css';


/**
 * App - Wrapper Component
 */
const App = (props) => (
  <div>
    <Header
      isLoggedIn={props.isAuthenticated}
      user={props.user}
      notifications={props.notifications}
    />
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
  );

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
