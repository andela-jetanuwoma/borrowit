/*global $ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
import Header from '../commons/Header';
import { getBorrowRequests } from '../../actions/requestActions';
import '../../assets/styles/dashboard.css';
import requestLogo from '../../assets/images/request.svg';
import displayRequests from './displayRequests';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = { requests: this.props.requests, isRequesting: true }
  }

  componentDidMount() {
    $('.tooltips').tooltipster({
        theme: 'tooltipster-noir'
    });
    this.props.getBorrowRequests()
      .then(() => {
        this.setState({ isRequesting: false });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.requests) {
      this.setState({ requests: nextProps.requests });
    }
  }

  render() {
    const { requests } = this.state;
    return (
      <div className="row dashboardWrapper">        
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h1>Request</h1>
          <h4>What do you want to lease</h4>
          {requests.map(displayRequests)}
        </div>
          
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="pending-request">
            <h2>Pending Requests</h2>
          </div>
        </div>
      </div>
    );
  }
}


Dashboard.propTypes = {
  requests: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getBorrowRequests: PropTypes.func.isRequired,

}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    requests: state.borrowRequests.requests,
    notifications: state.notifications,
  };
}

export default connect(mapStateToProps, { getBorrowRequests })(Dashboard);