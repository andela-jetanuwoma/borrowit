import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header from '../commons/Header';
import './index.css';


class Dashboard extends Component {

  render() {
    return (
      <div className="row main-page">
         <Header />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(mapStateToProps)(Dashboard);
