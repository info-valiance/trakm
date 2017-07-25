import React, { Component } from 'react'
import RechartGauge from './RechartGauge.js'
import '../css/FrontEnd.css'

class FrontEnd extends Component {
    render() {
        return (
            <div className="frontend-content-wrapper">
                <div className="flex-box frontend-card frontend-head">
                    <div className="flex-items page-name">
                        Model Name: Front End Reports
                    </div>
                    <div className="flex-items page-head-filler"></div>
                    <div className="flex-items page-current-window">
                        Current Window
                    </div>
                </div>

                <div className="flex-box frontend-card">
                    <div className="flex-items frontend-psi">
                        <div className="flex-box">
                            <div className="flex-items frontend-card-head">
                                Stability Index (PSI)
                            </div>
                        </div>
                        <div className="flex-box psi-gauge-chart-table-wrapper">
                            <div className="flex-items psi-gauge-chart">
                                <RechartGauge />
                            </div>
                            <div className="flex-items flex-box psi-gauge-legend">
                                <table className="flex-items psi-gauge-table">
                                    <tbody>
                                        <tr className="psi-gauge-table-head">
                                            <th>0 - 0.1</th>
                                        </tr>
                                        <tr className="psi-gauge-table-cell">
                                            <td>Little or no change</td>
                                        </tr>
                                        <tr className="psi-gauge-table-head">
                                            <th>0.1 - 0.25</th>
                                        </tr>
                                        <tr className="psi-gauge-table-cell">
                                            <td>Some change, close monitoring required</td>
                                        </tr>
                                        <tr className="psi-gauge-table-head">
                                            <th>0.25 & above</th>
                                        </tr>
                                        <tr className="psi-gauge-table-cell">
                                            <td>Major shift, requires review</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FrontEnd
