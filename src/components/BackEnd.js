import React, { Component } from 'react'
import RechartLine from './RechartLine.js'
import RechartComposed from './RechartComposed.js'
import ThumbsChart from './ThumbsChart.js'
import '../css/BackEnd.css'

// X and Y axis label component for score to odds line chart
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

class BackEnd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scoreOdds: {
                devBadRate: "1.8%",
                curBadRate: "1.7%",
                data: [
                    {Score: '0 - 261', Development: 11, Current: 13},
                    {Score: '262 - 273', Development: 34, Current: 34},
                    {Score: '274 - 283', Development: 44, Current: 49},
                    {Score: '284 - 291', Development: 67, Current: 88},
                    {Score: '292 - 298', Development: 75, Current: 111},
                    {Score: '299 - 305', Development: 111, Current: 100},
                    {Score: '306 - 312', Development: 142, Current: 111},
                    {Score: '313 - 330', Development: 182, Current: 181},
                    {Score: '331 - 341', Development: 247, Current: 206},
                    {Score: '342+', Development: 917, Current: 517}
                ],
                xAxisDataKey: "Score",
                xAxisText: "Score",
                yAxisText: "Odds",
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
            },
            gini: {
                dev: {
                    value: 0.35,
                    cutoff: 0.40 // value beyond which thumb direction changes
                },
                cur: {
                    value: 0.35,
                    cutoff: 0.4 // value beyond which thumb direction changes
                }
            },
            ks: {
                dev: {
                    value: 0.4,
                    cutoff: 0.5 // value beyond which thumb direction changes
                },
                cur: {
                    value: 0.4,
                    cutoff: 0.5 // value beyond which thumb direction changes
                }
            }
        }
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
                        <div className="flex-box backend-odds-text-wrapper">
                            <div className="flex-items">
                                Development Bad Rate - <span className="backend-odds-dev-rate">{this.state.scoreOdds.devBadRate}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Current Bad Rate - <span className="backend-odds-cur-rate">{this.state.scoreOdds.curBadRate}</span>
                            </div>
                        </div>
                        <div className="flex-box backend-odds-chart-content-wrapper">
                            <div className="flex-items backend-odds-chart">
                                <RechartLine
                                    data={this.state.scoreOdds.data}
                                    xAxisDataKey={this.state.scoreOdds.xAxisDataKey}
                                    // xAxisText={this.state.scoreOdds.xAxisText}
                                    // yAxisText={this.state.scoreOdds.yAxisText}
                                    xAxisLabel={<AxisLabel axisType='xAxis' text={this.state.scoreOdds.xAxisText} />}
                                    yAxisLabel={<AxisLabel axisType='yAxis' text={this.state.scoreOdds.yAxisText} />}
                                    legendLayout={this.state.scoreOdds.legendLayout}
                                    legendHeight={this.state.scoreOdds.legendHeight}
                                    legendWrapperStyle={this.state.scoreOdds.legendWrapperStyle}
                                    linesData={this.state.scoreOdds.linesData}
                                    // yAxisTickFormatter={this.toPercent}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-box backend-card">
                    <div className="flex-items backend-char-analysis-wrapper">
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Characteristics Analysis
                            </div>
                        </div>
                        <div className="flex-box char-analysis-chart-wrapper">
                            <div className="flex-items char-analysis-chart">
                                <RechartComposed />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-box backend-card">
                    <div className="flex-items backend-perf">
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Scorecard Performance
                            </div>
                        </div>
                        <div className="flex-box backend-perf-thumbs">
                            <div className="flex-items backend-perf-gini-wrapper">
                                <div className="flex-box backend-perf-gini">
                                    <div className="flex-items backend-perf-gini-head">
                                        Gini:
                                    </div>
                                    <div className="flex-box backend-perf-gini-ks-thumb-wrapper">
                                        <div className="flex-items backend-perf-gini-graph">
                                            <ThumbsChart data={this.state.gini.dev} />
                                        </div>
                                        <div className="flex-items gini-ks-value">
                                            Development:
                                            <br/>
                                            {this.state.gini.dev.value}
                                        </div>
                                    </div>
                                    <div className="flex-box backend-perf-gini-ks-thumb-wrapper">
                                        <div className="flex-items backend-perf-gini-graph">
                                            <ThumbsChart data={this.state.gini.cur} />
                                        </div>
                                        <div className="flex-items gini-ks-value">
                                            Current:
                                            <br/>
                                            {this.state.gini.cur.value}
                                        </div>
                                    </div>
                                    <div className="flex-box">
                                        <div className="flex-items gini-ks-note-head">
                                            Note:
                                        </div>
                                        <div className="flex-items gini-ks-note-text">
                                            Gini coefficient >0.4 means the predictive power of scorecard is good
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-items backend-perf-ks-wrapper">
                                <div className="flex-box backend-perf-ks">
                                    <div className="flex-items backend-perf-ks-head">
                                        KS:
                                    </div>
                                    <div className="flex-box backend-perf-gini-ks-thumb-wrapper">
                                        <div className="flex-items backend-perf-ks-graph">
                                            <ThumbsChart data={this.state.ks.dev} />
                                        </div>
                                        <div className="flex-items gini-ks-value">
                                            Development:
                                            <br/>
                                            {this.state.ks.dev.value}
                                        </div>
                                    </div>
                                    <div className="flex-box backend-perf-gini-ks-thumb-wrapper">
                                        <div className="flex-items backend-perf-ks-graph">
                                            <ThumbsChart data={this.state.ks.cur} />
                                        </div>
                                        <div className="flex-items gini-ks-value">
                                            Current:
                                            <br/>
                                            {this.state.ks.cur.value}
                                        </div>
                                    </div>
                                    <div className="flex-box">
                                        <div className="flex-items gini-ks-note-head">
                                            Note:
                                        </div>
                                        <div className="flex-items gini-ks-note-text">
                                            Gini coefficient >0.4 means the predictive power of scorecard is good
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BackEnd
