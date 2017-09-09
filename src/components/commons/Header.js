import React from 'react';
import Notifications from 'react-notification-system-redux';
import logo from '../../assets/images/logo.png';

export default function Header(props) {
    return (
        <div className="row main-header navbar">
            <Notifications
                notifications={props.notifications}
                style={{
                    NotificationItem: { // Override the notification item
                        DefaultStyle: { // Applied to every notification, regardless of the notification level
                            margin: '10px 5px 2px 1px',
                        },
                    },
                }}
            />
            <div className="logo-holder col-md-2">
                <img src={logo} />
                <h2>BorrowIt</h2>
                <span>Uber for borrowing stuff</span>
            </div>
            <div className="col-md-8">&nbsp</div>
            {props.isLoggedIn &&
                <div className="user-meta-data col-md-2">
                    <ul className="user-profile nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a className="user-block dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true">
                                <span className="user-name">Hi, {props.user.fullName}</span>
                                <span className="caret"></span>

                            </a>
                            <ul className="user-profile-dropdown dropdown-menu animated fadeInDown">
                                <li>
                                    <a ><i className="fa fa-user" aria-hidden="true"></i>View Profle</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-cog" aria-hidden="true"></i>Privacy settings</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}