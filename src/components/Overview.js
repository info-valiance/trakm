import React, { Component } from 'react'
import RechartLineArea from './RechartLineArea.js'
import RechartGauge from './RechartGauge.js'
import ThumbsChart from './ThumbsChart.js'
import RechartLine from './RechartLine.js'
import redGraphThumb from '../img/red.png'
import '../css/Overview.css'

// X and Y axis label component for gains line chart
const AxisLabel = (data) => {
    const isVert = data.axisType === 'yAxis';
    const cx = isVert ? data.viewBox.x : data.viewBox.x + (data.viewBox.width / 2);
    const cy = isVert ? (data.viewBox.height / 2) + data.viewBox.y : data.viewBox.y + data.viewBox.height + 10;
    const rot = isVert ? `270 ${cx} ${cy}` : 0;
    return (
        <text x={cx} y={cy} transform={`rotate(${rot})`} fontSize="14px" textAnchor="middle" stroke="#656565">
            {data.text}
        </text>
    );
};


class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gini: {
                value: 0.4, // gini value
                cutoff: 0.4 // value beyond which thumb direction changes
            },
            gains: {
                data: [
                    {'Cumulative Good': '0%', Development: 0, Current: 0, 'Cumulative Bad': '0%'},
                    {'Cumulative Good': '5%', Development: 30, Current: 25, 'Cumulative Bad': '5%'},
                    {'Cumulative Good': '10%', Development: 45, Current: 42, 'Cumulative Bad': '10%'},
                    {'Cumulative Good': '15%', Development: 55, Current: 50, 'Cumulative Bad': '15%'},
                    {'Cumulative Good': '20%', Development: 62, Current: 60, 'Cumulative Bad': '20%'},
                    {'Cumulative Good': '25%', Development: 70, Current: 67, 'Cumulative Bad': '25%'},
                    {'Cumulative Good': '30%', Development: 72, Current: 70, 'Cumulative Bad': '30%'},
                    {'Cumulative Good': '35%', Development: 75, Current: 72, 'Cumulative Bad': '35%'},
                    {'Cumulative Good': '40%', Development: 79, Current: 75, 'Cumulative Bad': '40%'},
                    {'Cumulative Good': '45%', Development: 83, Current: 78, 'Cumulative Bad': '45%'},
                    {'Cumulative Good': '50%', Development: 84, Current: 80, 'Cumulative Bad': '50%'},
                    {'Cumulative Good': '55%', Development: 89, Current: 85, 'Cumulative Bad': '55%'},
                    {'Cumulative Good': '60%', Development: 91, Current: 88, 'Cumulative Bad': '60%'},
                    {'Cumulative Good': '65%', Development: 92, Current: 90, 'Cumulative Bad': '65%'},
                    {'Cumulative Good': '70%', Development: 93, Current: 93, 'Cumulative Bad': '70%'},
                    {'Cumulative Good': '75%', Development: 95, Current: 94, 'Cumulative Bad': '75%'},
                    {'Cumulative Good': '80%', Development: 96, Current: 95, 'Cumulative Bad': '80%'},
                    {'Cumulative Good': '85%', Development: 97, Current: 96, 'Cumulative Bad': '85%'},
                    {'Cumulative Good': '90%', Development: 98, Current: 98, 'Cumulative Bad': '90%'},
                    {'Cumulative Good': '95%', Development: 99, Current: 98, 'Cumulative Bad': '95%'},
                    {'Cumulative Good': '100%', Development: 100, Current: 100, 'Cumulative Bad': 100}
                ],
                xAxisDataKey: "Cumulative Good",
                xAxisText: "Cumulative Good",
                yAxisText: "Cumulative Bad",
                legendLayout: "horizontal",
                legendHeight: 50,
                legendWrapperStyle: {
                    bottom: -15
                },
                linesData: [
                    {
                        dataKey: "Development",
                        stroke: "#00aaff"
                    },
                    {
                        dataKey: "Current",
                        stroke: "#006699"
                    }
                ]
            }
        }
    }

    // return yAxis ticks with percent symbol for gains line chart
    /*global toPercent:true*/
    toPercent = (data) => {
        return `${data}%`
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
                                <ThumbsChart data={this.state.gini} />
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
                            <RechartLine
                                data={this.state.gains.data}
                                xAxisDataKey={this.state.gains.xAxisDataKey}
                                // xAxisText={this.state.gains.xAxisText}
                                // yAxisText={this.state.gains.yAxisText}
                                xAxisLabel={<AxisLabel axisType='xAxis' text={this.state.gains.xAxisText} />}
                                yAxisLabel={<AxisLabel axisType='yAxis' text={this.state.gains.yAxisText} />}
                                legendLayout={this.state.gains.legendLayout}
                                legendHeight={this.state.gains.legendHeight}
                                legendWrapperStyle={this.state.gains.legendWrapperStyle}
                                linesData={this.state.gains.linesData}
                                yAxisTickFormatter={this.toPercent}
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Overview
