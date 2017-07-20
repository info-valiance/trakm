import React, { Component } from 'react'
import RechartLineArea from './RechartLineArea.js'
import '../css/Overview.css'

class Overview extends Component {
    render() {
        return (
            <div className="overview-content-wrapper">
                <div className="flex-box overview-card overview-head">

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
