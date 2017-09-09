import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { loginUser } from '../../actions/userActions';
import Header from '../commons/Header';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated,
      user: {...this.props.user},
      isLoading: false };
  }

  componentDidMount() {
    //some action goes in here
    if (this.props.isAuthenticated) {
      this.context.router.push('/requests');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.context.router.push('/requests');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="main-wrapper">
          <h2>Login to access your account</h2>
          <div className="login-pane">
            <Link className="btn btn-primary btn-lg btn-block" onClick={this.props.loginUser}><i className="fa fa-slack"></i> Login with slack</Link>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.contextTypes = {
  router: PropTypes.object.isRequired,
}

LandingPage.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
   notifications: state.notifications,
});


export default connect(mapStateToProps, { loginUser })(LandingPage);