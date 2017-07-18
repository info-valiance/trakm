import React, { Component } from 'react';
import '../css/Header.css'

class Header extends Component {
    render() {
        return (
            <nav className="header-navbar">
                <div className="header-wrapper">
                    <h1>TrakM</h1>
                    <div className="header-filler"></div>
                    <div className="header-elements">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                        <span className="header-user-name">John Doe ▾</span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
