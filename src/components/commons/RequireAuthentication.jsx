import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';


export default (ComposedComponent) => {
  /**
   * Higher order component
   * protect routes from guest users
   *
   * @class RequireAuthentication
   * @extends {React.Component}
   */
  class RequireAuthentication extends React.Component {
    /**
     *
     * checks if user is authenticated before mounting
     *
     * @memberof RequireAuthentication
     */
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/');
        return (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      }
    }

    /**
     * checks if user is still authenticated after component update
     *
     * @param {object} nextProps - new props after update
     *
     * @memberof RequireAuthentication - redirect object
     */
    componentWillUpdate(nextProps) {
      if (!this.props.isAuthenticated || !nextProps.isAuthenticated) {
        this.props.history.push('/');
        return (
          <Redirect
            to={{
              pathname: '/',
              state: { from: this.props.location }
            }}
          />
        );
      }
    }

    /**
     * renders component to DOM
     *
     * @returns {Object}
     *
     * @memberof RequireAuthentication
     */
    render() {
      return (
        <ComposedComponent {...this.props} {...this.state} />
      );
    }
  }
  
  RequireAuthentication.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };
  
  RequireAuthentication.defaultProps = {
    isAuthenticated: false,
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  return connect(mapStateToProps)(RequireAuthentication);
};
