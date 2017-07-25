import React, { Component } from 'react'
import RechartLineArea from './RechartLineArea.js'
import RechartGauge from './RechartGauge.js'
import GiniChart from './GiniChart.js'
import RechartLine from './RechartLine.js'
import redGraphThumb from '../img/red.png'
import '../css/Overview.css'

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gini: {
                value: 0.35, // gini value
            }
        }
    }

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
                    <div className="flex-box model-detail-content">
                        <div className="flex-items model-detail-img">
                            <img className="overview-model-img" src={redGraphThumb} alt=""/>
                            <div className="model-detail-img-text">Model Name</div>
                        </div>
                        <div className="flex-items model-detail-text">
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Name</span>
                                <span className="detail-text-row-right">: Model Name</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Type</span>
                                <span className="detail-text-row-right">: Classification</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Technique</span>
                                <span className="detail-text-row-right">: Logistic Regression</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Category</span>
                                <span className="detail-text-row-right">: Fraud</span>
                            </div>
                            <div className="model-detail-text-row">
                                <span className="detail-text-row-left">Development Window</span>
                                <span className="detail-text-row-right">: 1 Jan 14 to 31 Dec 14</span>
                            </div>
                        </div>
                        <div className="flex-items model-detail-btn">
                            <button className="overview-download">
                                <i className="fa fa-download" aria-hidden="true"></i> Download
                            </button>
                            <br />
                            <button className="overview-share">
                                <i className="fa fa-share-alt" aria-hidden="true"></i> Share
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-box overview-gini-psi-wrapper">
                    <div className="flex-items overview-gini overview-card">
                        <div className="flex-box">
                            <div className="flex-items overview-card-head">
                                Model Performance
                            </div>
                        </div>
                        <div className="flex-box gini-chart-wrapper">
                            <div className="flex-items gini-chart">
                                <GiniChart data={this.state.gini} />
                            </div>
                            <div className="flex-items gini-value">
                                Gini:
                                <br/>
                                {this.state.gini.value}
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="flex-items gini-note-head">
                                Note:
                            </div>
                            <div className="flex-items gini-note-text">
                                Gini coefficient >0.4 means the predictive power of scorecard is good
                            </div>
                        </div>
                    </div>

                    <div className="flex-items overview-psi overview-card">
                        <div className="flex-box">
                            <div className="flex-items overview-card-head">
                                Stability Index (PSI)
                            </div>
                        </div>
                        <div className="flex-box">
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

                <div className="overview-card overview-head">
                    <div className="flex-box">
                        <div className="flex-items overview-card-head">
                            Gains Chart
                        </div>
                    </div>
                    <div className="flex-box gains-chart-wrapper">
                        <div className="flex-items gains-chart">
                            <RechartLine />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Overview
