import React, { Component } from 'react';
import VicPieChart from './VicPieChart.js'
import '../css/Main.css'

class Main extends Component {
    render() {
        return (
            <main className="main-section">
                <VicPieChart />
            </main>
        )
    }
}

export default Main
