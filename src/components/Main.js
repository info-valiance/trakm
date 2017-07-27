import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from './Home.js'
import Overview from './Overview.js'
import FrontEnd from './FrontEnd.js'
import BackEnd from './BackEnd.js'
import '../css/Main.css'

class Main extends Component {
    render() {
        return (
            <main className="main-section">
                <Route exact path="/" component={Home}/>
                <Route exact path="/overview" component={Overview}/>
                <Route exact path="/frontend" component={FrontEnd}/>
                <Route exact path="/backend" component={BackEnd}/>
            </main>
        )
    }
}

export default Main
