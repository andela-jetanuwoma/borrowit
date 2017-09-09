/*global $ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
import Header from '../commons/Header';
import { getBorrowRequests } from '../../actions/requestActions';
import '../../assets/styles/dashboard.css';
import requestLogo from '../../assets/images/request.svg';




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
      <div className="row main-page">
        <Header
          isLoggedIn={this.props.isAuthenticated}
          user={this.props.user}
          notifications={this.props.notifications}
        />
        <div className="contentWrapper">
          <div className="row">
            <div className="col-md-8">
              <h1>Borrow Request</h1>
              <h4>What do you want to lease</h4>
              <div className="row">
                {requests.map((request, index) => (
                  <div className="col-md-6" key={`request_${index}`}>
                    <div className="request-card">
                      <img src={requestLogo} className="request-logo" />
                      <h5>{request.fullName}</h5>
                      <p>{request.slackHandle}</p>
                      <span className="item">{request.itemName}</span>
                      <div className="request-action row">
                        <a className="btn-accept col-sm-6 col-xs-12"><i className="fa fa-check" aria-hidden="true"></i> Accept</a>
                        <a className="btn-message col-sm-6 col-xs-12"><i className="fa fa-info" aria-hidden="true"></i><span data-tip={request.description}>Details</span></a>
                        <ReactTooltip />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="pending-request">
                <h2>Pending Requests</h2>
              </div>
            </div>
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
