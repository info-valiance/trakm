import React, { Component } from 'react';
import '../css/Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <div className="nav-wrapper">
                    <h1>TrakM</h1>

                    <ul className="nav-ul-top">
                        <li><i className="fa fa-tachometer" aria-hidden="true"></i> Overview</li>
                        <li><i className="fa fa-area-chart" aria-hidden="true"></i> Frontend</li>
                        <li><i className="fa fa-pie-chart" aria-hidden="true"></i> Backend</li>
                    </ul>

                    <ul className="nav-ul-bottom">
                        <li><i className="fa fa-home" aria-hidden="true"></i> Home</li>
                        <li><i className="fa fa-cog" aria-hidden="true"></i> Settings</li>
                        <li><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</li>
                    </ul>

                </div>
            </aside>
        )
    }
}

export default Sidebar
