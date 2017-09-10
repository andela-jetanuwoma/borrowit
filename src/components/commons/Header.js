import React, { Component } from 'react';
import Notifications from 'react-notification-system-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import logo from '../../assets/images/logo.png';
import RequestItem from '../requestItem/RequestItem';
import store from '../../stores/configureStore';
import { setLoggedInUser } from '../../actions/userActions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    window.localStorage.clear();
    store.dispatch(setLoggedInUser(null));
  }

  render() {

    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px',
        },
      },
    };

    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link">
            <RequestItem />
          </span>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <i className="fa fa-bell" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <i className="fa fa-envelope" />
            <Notifications
              notifications={this.props.notifications}
              style={style}
            />
          </Link>
        </li>
        <ul className="nav navbar-nav user-details">
          <li className="dropdown">
            <a className="dropdown-toggle profile-details" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <img src={this.props.user.profile_image} alt={this.props.user.name} className="img-rounded profile-img" />
              <span className="text-capitalize">{this.props.user.name}</span><span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li role="separator" className="divider"></li>
              <li>
                <button className="btn btn-default" onClick={() => this.logout()}>Logout</button>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light sticky-top main-header">
        <div className="col-2 nav-bar-logo-wrapper">
          <Link className="navbar-brand" to="/">
            <div className="logo-holder">
              <img src={logo} className="nav-bar-logo" alt="logo" />
              <h5 className="logo-name">BorrowIT</h5>
              <span className="slogan">Uber for borrowing stuff</span>
            </div>
          </Link>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="col-10 nav-menu">
          <div className="collapse navbar-collapse" id="navbarNav" style={{ float: 'right' }}>
            {
              this.props.isAuthenticated && authLinks
            }
          </div>
        </div>

      </nav>
    );
  }
}


const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  notifications: state.notifications,
});

export default connect(mapStateToProps, null)(Header);
