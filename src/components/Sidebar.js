import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { expandSidebar: true }
    }

    // toggle sidebar expandSidebar state on hamburger click
    /*global toggleSidebar:true*/
    toggleSidebar = () => {
        this.setState({ expandSidebar: !this.state.expandSidebar })
    }

    render() {
        return (
            <aside
                style={{
                    width: `${this.state.expandSidebar ? '250px' : '50px'}`
                }}
            >
                <div className="nav-wrapper">
                    <h1>
                        <i
                            className="fa fa-bars"
                            aria-hidden="true"
                            onClick={this.toggleSidebar}
                        ></i>
                        &nbsp;
                        <span
                            className="sidebar-toggle-items"
                            style={{
                                display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                            }}
                        >TrakM</span>
                    </h1>

                    <ul className="nav-ul-top">
                        <li>
                            <Link
                                to="/overview"
                            >
                                <i className="fa fa-tachometer" aria-hidden="true"></i>
                                &nbsp;
                                <span
                                    className="sidebar-toggle-items"
                                    style={{
                                        display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                                    }}
                                >Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/frontend"
                            >
                                <i className="fa fa-area-chart" aria-hidden="true"></i>
                                &nbsp;
                                <span
                                    className="sidebar-toggle-items"
                                    style={{
                                        display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                                    }}
                                >Frontend</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/backend"
                            >
                                <i className="fa fa-pie-chart" aria-hidden="true"></i>
                                &nbsp;
                                <span
                                    className="sidebar-toggle-items"
                                    style={{
                                        display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                                    }}
                                >Backend</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="nav-ul-bottom">
                        <li>
                            <Link
                                to="/"
                            >
                                <i className="fa fa-home" aria-hidden="true"></i>
                                &nbsp;
                                <span
                                    className="sidebar-toggle-items"
                                    style={{
                                        display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                                    }}
                                >Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                            >
                                <i className="fa fa-cog" aria-hidden="true"></i>
                                &nbsp;
                                <span
                                    className="sidebar-toggle-items"
                                    style={{
                                        display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                                    }}
                                >Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logout"
                            >
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                &nbsp;
                                <span
                                    className="sidebar-toggle-items"
                                    style={{
                                        display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                                    }}
                                >Logout</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </aside>
        )
    }
}

export default Sidebar
