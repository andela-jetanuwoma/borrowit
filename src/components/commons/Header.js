import React from 'react';
import Notifications from 'react-notification-system-redux';
import { Link } from 'react-router';
import logo from '../../assets/images/logo.png';
import RequestItem from '../requestItem/RequestItem';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top main-header">
      <div className="col-2 nav-bar-logo-wrapper">
        <Link className="navbar-brand" to="/">
          <div className="logo-holder">
            <img src={logo} className="nav-bar-logo" />
            <h5 className="logo-name">BorrowIt</h5>
            <span className="slogan">Uber for borrowing stuff</span>
          </div>
        </Link>
      </div>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="col-10 nav-menu">
        <div className="collapse navbar-collapse" id="navbarNav" style={{float:'right'}}>
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
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}