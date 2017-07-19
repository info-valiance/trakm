import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
                            style={{
                                cursor: 'pointer'
                            }}
                        ></i>
                        &nbsp;
                        <span
                            className="sidebar-toggle-items"
                            // style={{
                            //     display: `${this.state.expandSidebar ? 'inline-block' : 'none'}`
                            // }}
                            style={{
                                paddingLeft: '7px'
                            }}
                        >TrakM</span>
                    </h1>

                    <ul className="nav-ul-top">
                        <NavbarLiLink to="/overview" icon="fa fa-tachometer" label="Overview" expandSidebar={this.state.expandSidebar} />
                        <NavbarLiLink to="/frontend" icon="fa fa-area-chart" label="Frontend" expandSidebar={this.state.expandSidebar} />
                        <NavbarLiLink to="/backend" icon="fa fa-pie-chart" label="Backend" expandSidebar={this.state.expandSidebar} />
                    </ul>

                    <ul className="nav-ul-bottom">
                        <NavbarLiLink activeOnlyWhenExact={true} to="/" icon="fa fa-home" label="Home" expandSidebar={this.state.expandSidebar} />
                        <NavbarLiLink to="/settings" icon="fa fa-cog" label="Settings" expandSidebar={this.state.expandSidebar} />
                        <NavbarLiLink to="/logout" icon="fa fa-sign-out" label="Logout" expandSidebar={this.state.expandSidebar} />


                        {/* previous way of rendering li with link */}
                        {/* <li>
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
                        </li> */}
                    </ul>

                </div>
            </aside>
        )
    }
}

// Custom link creating component which will match the path apply active class to matching element wrapper
const NavbarLiLink = ({ label, icon, to, activeOnlyWhenExact, expandSidebar }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? 'navbar-li-active' : ''}>
            <Link to={to}>
                <i className={icon} aria-hidden="true"></i>
                &nbsp;
                <span
                    className="sidebar-toggle-items"
                    // style={{
                    //     display: `${expandSidebar ? 'inline-block' : 'none'}`
                    // }}
                    >{label}</span>
                </Link>
        </li>
    )}/>
)

export default Sidebar
