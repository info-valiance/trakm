import React, { Component } from 'react'
import VicPieChart from './VicPieChart.js'
import '../css/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-content-wrapper">
                <div className="flex-box">
                    <div className="flex-items home-graphs">
                        <div className="flex-box">
                            <div className="flex-items">
                                <VicPieChart />
                            </div>
                            <div className="flex-items">
                                <VicPieChart />
                            </div>
                        </div>
                    </div>
                    <div className="flex-items home-add-model">kd</div>
                </div>
            </div>
        )
    }
}

export default Home
