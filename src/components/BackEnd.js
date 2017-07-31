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
            },
            vintage30dpd: {
                data: [
                    {Model: 'M1', 'Q2-2014': 0.1, 'Q3-2014': 0.0, 'Q4-2014': 0.0, 'Q1-2015': 0.1, 'Q2-2015': 0.0, 'Q3-2015': 0.0, 'Q5-2015': 0.0, 'Q1-2016': 0.0},
                    {Model: 'M2', 'Q2-2014': 1.1, 'Q3-2014': 1.1, 'Q4-2014': 0.8, 'Q1-2015': 0.7, 'Q2-2015': 0.4, 'Q3-2015': 0.2, 'Q5-2015': 0.1, 'Q1-2016': 0.1},
                    {Model: 'M3', 'Q2-2014': 1.9, 'Q3-2014': 1.9, 'Q4-2014': 1.5, 'Q1-2015': 1.1, 'Q2-2015': 0.9, 'Q3-2015': 0.6, 'Q5-2015': 0.3, 'Q1-2016': 0.4},
                    {Model: 'M4', 'Q2-2014': 3.0, 'Q3-2014': 2.6, 'Q4-2014': 2.2, 'Q1-2015': 1.7, 'Q2-2015': 1.5, 'Q3-2015': 0.8, 'Q5-2015': 0.5, 'Q1-2016': 0.5},
                    {Model: 'M5', 'Q2-2014': 3.9, 'Q3-2014': 3.5, 'Q4-2014': 2.7, 'Q1-2015': 2.3, 'Q2-2015': 2.0, 'Q3-2015': 1.0, 'Q5-2015': 0.8, 'Q1-2016': 0.6},
                    {Model: 'M6', 'Q2-2014': 4.4, 'Q3-2014': 4.2, 'Q4-2014': 3.3, 'Q1-2015': 3.1, 'Q2-2015': 2.4, 'Q3-2015': 1.3, 'Q5-2015': 1.0, 'Q1-2016': 0.8},
                    {Model: 'M7', 'Q2-2014': 5.1, 'Q3-2014': 4.9, 'Q4-2014': 4.0, 'Q1-2015': 3.7, 'Q2-2015': 2.7, 'Q3-2015': 1.6, 'Q5-2015': 1.2, 'Q1-2016': 0.8},
                    {Model: 'M8', 'Q2-2014': 5.7, 'Q3-2014': 5.5, 'Q4-2014': 4.8, 'Q1-2015': 4.3, 'Q2-2015': 3.2, 'Q3-2015': 1.9, 'Q5-2015': 1.3},
                    {Model: 'M9', 'Q2-2014': 6.3, 'Q3-2014': 6.1, 'Q4-2014': 5.6, 'Q1-2015': 4.6, 'Q2-2015': 3.6, 'Q3-2015': 2.2, 'Q5-2015': 1.5},
                    {Model: 'M10', 'Q2-2014': 6.9, 'Q3-2014': 6.7, 'Q4-2014': 6.5, 'Q1-2015': 5.1, 'Q2-2015': 4.0, 'Q3-2015': 2.5, 'Q5-2015': 1.5},
                    {Model: 'M11', 'Q2-2014': 7.3, 'Q3-2014': 7.5, 'Q4-2014': 7.2, 'Q1-2015': 5.6, 'Q2-2015': 4.4, 'Q3-2015': 2.9},
                    {Model: 'M12', 'Q2-2014': 7.8, 'Q3-2014': 8.3, 'Q4-2014': 7.7, 'Q1-2015': 6.1, 'Q2-2015': 4.7, 'Q3-2015': 3.1},
                    {Model: 'M13', 'Q2-2014': 8.3, 'Q3-2014': 8.9, 'Q4-2014': 8.2, 'Q1-2015': 6.5, 'Q2-2015': 5.1, 'Q3-2015': 3.1},
                    {Model: 'M14', 'Q2-2014': 9.0, 'Q3-2014': 9.2, 'Q4-2014': 8.7, 'Q1-2015': 6.8, 'Q2-2015': 5.4},
                    {Model: 'M15', 'Q2-2014': 9.4, 'Q3-2014': 9.8, 'Q4-2014': 9.1, 'Q1-2015': 7.2, 'Q2-2015': 5.5},
                    {Model: 'M16', 'Q2-2014': 9.9, 'Q3-2014': 10.2, 'Q4-2014': 9.5, 'Q1-2015': 7.5, 'Q2-2015': 5.5},
                    {Model: 'M17', 'Q2-2014': 10.2, 'Q3-2014': 10.5, 'Q4-2014': 9.9, 'Q1-2015': 7.8},
                    {Model: 'M18', 'Q2-2014': 10.5, 'Q3-2014': 10.9, 'Q4-2014': 10.3, 'Q1-2015': 7.9},
                    {Model: 'M19', 'Q2-2014': 11.0, 'Q3-2014': 11.3, 'Q4-2014': 10.7, 'Q1-2015': 7.9},
                    {Model: 'M20', 'Q2-2014': 11.3, 'Q3-2014': 11.6, 'Q4-2014': 11.0},
                    {Model: 'M21', 'Q2-2014': 11.7, 'Q3-2014': 11.9, 'Q4-2014': 11.1},
                    {Model: 'M22', 'Q2-2014': 12.1, 'Q3-2014': 12.2, 'Q4-2014': 11.1},
                    {Model: 'M23', 'Q2-2014': 12.2, 'Q3-2014': 12.4},
                    {Model: 'M24', 'Q2-2014': 12.6, 'Q3-2014': 12.5},
                    {Model: 'M25', 'Q2-2014': 12.9, 'Q3-2014': 12.5},
                    {Model: 'M26', 'Q2-2014': 13.2},
                ],
                xAxisDataKey: "Score",
                xAxisText: "",
                yAxisText: "",
                legendLayout: "horizontal",
                // legendHeight: 50,
                // legendWrapperStyle: {
                //     bottom: -15
                // },
                linesData: [
                    {
                        dataKey: "Q2-2014",
                        stroke: "#3F51B5"
                    },
                    {
                        dataKey: "Q3-2014",
                        stroke: "#2196F3"
                    },
                    {
                        dataKey: "Q4-2014",
                        stroke: "#03A9F4"
                    },
                    {
                        dataKey: "Q1-2015",
                        stroke: "#00BCD4"
                    },
                    {
                        dataKey: "Q2-2015",
                        stroke: "#009688"
                    },
                    {
                        dataKey: "Q3-2015",
                        stroke: "#4CAF50"
                    },
                    {
                        dataKey: "Q5-2015",
                        stroke: "#8BC34A"
                    },
                    {
                        dataKey: "Q1-2016",
                        stroke: "#CDDC39"
                    }
                ]
            },
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

                <div className="flex-box backend-card">
                    <div className="flex-items backend-vintage-analysis-wrapper">
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Vintage Analysis
                            </div>
                        </div>
                        <div className="flex-box vintage-analysis-chart-wrapper">
                            <div className="flex-items vintage-analysis-chart">
                                <RechartLine
                                    data={this.state.vintage30dpd.data}
                                    xAxisDataKey={this.state.vintage30dpd.xAxisDataKey}
                                    // xAxisText={this.state.vintage30dpd.xAxisText}
                                    // yAxisText={this.state.vintage30dpd.yAxisText}
                                    xAxisLabel={<AxisLabel axisType='xAxis' text={this.state.vintage30dpd.xAxisText} />}
                                    yAxisLabel={<AxisLabel axisType='yAxis' text={this.state.vintage30dpd.yAxisText} />}
                                    legendLayout={this.state.vintage30dpd.legendLayout}
                                    legendHeight={this.state.vintage30dpd.legendHeight}
                                    legendWrapperStyle={this.state.vintage30dpd.legendWrapperStyle}
                                    linesData={this.state.vintage30dpd.linesData}
                                    yAxisTickFormatter={(data) => `${data}%`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BackEnd
