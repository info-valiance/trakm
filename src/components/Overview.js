import React, { Component } from 'react'
import RechartLineArea from './RechartLineArea.js'
import redGraphThumb from '../img/red.png'
import '../css/Overview.css'

class Overview extends Component {
    render() {
        return (
            <div className="overview-content-wrapper">
                <div className="flex-box overview-card overview-head">
                    <div className="flex-items page-name">
                        Model Name: Overview
                    </div>
                    <div className="flex-items page-head-filler"></div>
                    <div className="flex-items page-current-window">
                        Current Window
                    </div>
                </div>
                <div className="flex-box overview-card">
                    <div className="flex-items overview-gains-chart">
                        <RechartLineArea />
                    </div>
                </div>
                <div className="overview-card">
                    <div className="flex-box">
                        <div className="flex-items overview-card-head">
                            Model Details
                        </div>
                    </div>
                    <div className="flex-box">
                        <div className="flex-items model-detail-img">
                            <img src={redGraphThumb} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview
