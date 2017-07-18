import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <div className="nav-wrapper">
                    <h1><i className="fa fa-bars" aria-hidden="true"></i> TrakM</h1>

                    <ul className="nav-ul-top">
                        <li>
                            <Link
                                to="/overview"
                            >
                                <i className="fa fa-tachometer" aria-hidden="true"></i> Overview
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/frontend"
                            >
                                <i className="fa fa-area-chart" aria-hidden="true"></i> Frontend
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/backend"
                            >
                                <i className="fa fa-pie-chart" aria-hidden="true"></i> Backend
                            </Link>
                        </li>
                    </ul>

                    <ul className="nav-ul-bottom">
                        <li>
                            <Link
                                to="/"
                            >
                                <i className="fa fa-home" aria-hidden="true"></i> Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                            >
                                <i className="fa fa-cog" aria-hidden="true"></i> Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logout"
                            >
                                <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                            </Link>
                        </li>
                    </ul>

                </div>
            </aside>
        )
    }
}

export default Sidebar
