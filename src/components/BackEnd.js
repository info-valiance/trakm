import React, { Component } from 'react'
import '../css/BackEnd.css'

class BackEnd extends Component {
    constructor(props) {
        super(props)
        // this.state = {}
    }

    render() {
        return (
            <div className="backend-content-wrapper">

                <div className="flex-box backend-card backend-head">
                    <div className="flex-items page-name">
                        Model Name: Front End Reports
                    </div>
                    <div className="flex-items page-head-filler"></div>
                    <div className="flex-items page-current-window">
                        Current Window
                    </div>
                </div>

                <div className="flex-box backend-card">
                    <div className="flex-items backend-odds">
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Score to Odds Report
                            </div>
                        </div>
                        <div className="flex-box backend-odds-chart-content-wrapper">
                            <div className="flex-items backend-odds-chart">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BackEnd
