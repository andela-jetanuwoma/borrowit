import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


export default (ComposedComponent) => {
  
  class PreventAuthenticatedUsers extends React.Component {

    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.context.router.push('/dashboard');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/dashboard');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.isAuthenticated) {
        this.context.router.push('/dashboard');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} {...this.state} />
      );
    }
  }
  
  PreventAuthenticatedUsers.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };
  
  PreventAuthenticatedUsers.defaultProps = {
    isAuthenticated: false,
  };

  PreventAuthenticatedUsers.contextTypes = {
    router: PropTypes.object.isRequired,
  }
  

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  return connect(mapStateToProps)(PreventAuthenticatedUsers);
};
