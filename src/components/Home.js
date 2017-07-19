import React, { Component } from 'react'
// import VicPieChart from './VicPieChart.js'
import RechartPie from './RechartPie.js'
import '../css/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-content-wrapper">
                <div className="flex-box home-addmodel-graph-wrapper">
                    <div className="flex-items home-graphs">
                        <div className="card-accent"></div>
                        <div className="flex-box">
                            <div className="flex-items perf-dist-wrapper">
                                <h1>Performance Distribution of Models</h1>
                                {/* <VicPieChart /> */}
                                <RechartPie />
                            </div>
                            <div className="flex-items age-dist-wrapper">
                                <h1>Age Distribution of Models</h1>
                                {/* <VicPieChart /> */}
                                <RechartPie />
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
