import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from './Home.js'
import '../css/Main.css'

class Main extends Component {
    render() {
        return (
            <main className="main-section">
                <Route exact path="/" component={Home}/>
            </main>
        )
    }
}

export default Main
