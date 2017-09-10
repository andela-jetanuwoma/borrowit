import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export default (ComposedComponent) => {
  class RequireAuthentication extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!this.props.isAuthenticated || !nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

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

  RequireAuthentication.contextTypes = {
    router: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  return connect(mapStateToProps)(RequireAuthentication);
};
