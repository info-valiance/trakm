import React, { Component } from 'react'
import RechartLineArea from './RechartLineArea.js'
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
            </div>
        )
    }
}

export default Overview
