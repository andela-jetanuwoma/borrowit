/*global $ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/styles/dashboard.css';
import displayRequests from './displayRequests';
import ReactTooltip from 'react-tooltip'
import Header from '../commons/Header';
import Notifications from 'react-notification-system-redux';
import { getBorrowRequests, acceptBorrowRequest, getLeasedItems } from '../../actions/requestActions';
import '../../assets/styles/dashboard.css';
import { fadeInDown } from 'react-animations'
import requestLogo from '../../assets/images/request.svg';
import DisplayRequest from './displayRequests';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      requests: this.props.requests,
      leasedItems: this.props.leasedItems,
      isRequesting: true,
      ownerComment: '',
    }

    this.acceptRequest = this.acceptRequest.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.removeLoader = this.removeLoader.bind(this);
  }

  componentDidMount() {
    $('.tooltips').tooltipster({
      theme: 'tooltipster-noir'
    });

    $('.notification-success')
    this.props.getBorrowRequests()

    setTimeout(this.removeLoader, 3000);

    this.props.getLeasedItems()
      .then(() => {

      });
  }

  removeLoader() {
    this.setState({ isRequesting: false });
  }
  

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ requests: nextProps.requests, leasedItems: nextProps.leasedItems });
    }
  }

  onCommentChange(event) {
    this.setState({ ownerComment: event.target.value });
  }

  sendRequest(request) {
    this.props.acceptBorrowRequest(request)
      .then(() => {
      })
  }


  acceptRequest(request) {
    
    const notificationOpts = {
      title: 'Great job!',
      children:
      (<div className="note-action">
        <div>
          <p>A notification will be sent to {request.slackHandle} you can send some message now</p>
        </div>
        <textarea type="text" onChange={this.onCommentChange} className="reason-form" autoFocus="true" ></textarea>
        <div className="container-inline">
          <a className="btn btn-success" onClick={() => this.sendRequest(request)}>Send</a>
          <a className="btn btn-warning float-right" onClick={() => console.log('sent')}>Cancel</a>
        </div>
      </div>),
      position: 'tr',
      autoDismiss: 0,
      action: {
        label: 'Am Giving!',
        callback: () => alert('clicked!')
      }
    }
    this.context.store.dispatch(Notifications.success(notificationOpts));
  }

  render() {
    const { requests } = this.state;

    console.log(this.props.user);
    return (
      <div className="row dashboardWrapper">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h1>Request</h1>
          <h4 onClick={() => this.acceptRequest({})}>What do you want to lease</h4>
          {requests.map((request, index ) =>
          (
            <DisplayRequest
              key={`ite,dec+ `}
              fullName={request.fullName}
              slackHandle={request.slackHandle}
              itemName={request.itemName}
              description={request.description}
              acceptRequest={this.acceptRequest}
              request={request}
              key={`${index}_index`}/>
          ))}
        </div>

        <div className="col-md-4 side-bar">
          <div className="pending-request">
            <h2>Leased Items</h2>
            <ul>
              {this.state.leasedItems.map((item, index) => (
                <li key={`item_${index}_hjds`}>
                  <a className="request-item">
                    <span className="employees-item-img">
                      <img src={requestLogo} alt="User avatar" />
                    </span>
                    <div className="request-block">
                      <div className="request-name">{item.fullName}
                      </div>
                      <div className="request-itemSlack">{item.slackHandle}</div>
                      <div className="request-itemName">{item.itemName}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


Dashboard.propTypes = {
  requests: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getBorrowRequests: PropTypes.func.isRequired,
  acceptBorrowRequest: PropTypes.func.isRequired,
  getLeasedItems: PropTypes.func.isRequired,
  leasedItems: PropTypes.array.isRequired,
}

Dashboard.defaultProps = {
  requests: [],
  user: {},
}

Dashboard.contextTypes = {
  store: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    requests: state.borrowRequests.requests,
    leasedItems: state.borrowRequests.leasedItems,
    notifications: state.notifications,
  };
}

const mapPropsToDispatch = ({
  getBorrowRequests,
  acceptBorrowRequest,
  getLeasedItems,
});

export default connect(mapStateToProps, mapPropsToDispatch)(Dashboard);
