import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import './index.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false, user: {}, isLoading: false };
  }

  componentDidMount() {
    //some action goes in here

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div className="row main-page">
         <div className="row main-header">
           <div className="logo-holder col-md-2">
                <img src={logo} />
                <h2>BorrowIt</h2>
                <span>Uber for borrowing stuff</span>
           </div>
         </div>
         <div className="container main-wrapper">
           <h2>Login to access your account</h2>
           <div className="login-pane">
             <a className="btn btn-primary btn-lg btn-block"><i className="fa fa-google"></i>Login with google</a>
           </div>
         </div>
      </div>
    );
  }
}

export default connect(() => {})(LandingPage);