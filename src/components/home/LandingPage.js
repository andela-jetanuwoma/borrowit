import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated,
      user: {...this.props.user},
      isLoading: false 
    };

    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  componentDidMount() {
    if (this.props.location.query.token) {
      window.localStorage.setItem('x-borrowIt-auth', this.props.location.query.token);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.isAuthenticated);
    if (nextProps.isAuthenticated) {
      this.context.router.push('/requests');
    }
  }

  redirectToLogin() {
    window.location = 'https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=80184266784.238539426403&redirect_uri=https://borrow-it-now.herokuapp.com/auth/slack/callback';
    
  }

  render() {
    console.log(this.props.isAuthenticated, this.props.user);
    return (
      <div className="row">
        <div className="main-wrapper">
          <h2>Login to access your account</h2>
          <div className="login-pane">            
            <span onClick={() => this.redirectToLogin()}>
              <img alt="Sign in with Slack"
                height="40"
                width="172"
                src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
                srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
            </span>
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
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  notifications: state.notifications,
});


export default connect(mapStateToProps, { })(LandingPage);