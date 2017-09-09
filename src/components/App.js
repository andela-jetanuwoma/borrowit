import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/style.css';


/**
 * App - Wrapper Component
 */
const App = (props) => (
  <div className="main-wrapper">
    {props.children}
  </div>
  );

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
