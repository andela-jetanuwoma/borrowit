import React from 'react';
import logo from '../../assets/images/logo.png';

export default function Header(props) {
    return (
        <div className="row main-header">
            <div className="logo-holder col-md-2">
                <img src={logo} />
                <h2>BorrowIt</h2>
                <span>Uber for borrowing stuff</span>
            </div>
        </div>
    );
}