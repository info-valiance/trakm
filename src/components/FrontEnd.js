import React, { Component } from 'react'
import RechartGauge from './RechartGauge.js'
import RechartRadialBar from './RechartRadialBar.js'
import CharacterCard from './CharacterCard.js'
import RechartBar from './RechartBar.js'
import '../css/FrontEnd.css'

class FrontEnd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // data for psi gauge
            psi: {
                value: 0.30 // psi value
            },
            // data for population index radial graphs
            popRadial: {
                data: [
                    {
                        name: "0 - 261",
                        plotData: [
                            {name: 'Current', percent: 8, fill: '#006699'},
                            {name: 'Development', percent: 10, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "262 - 273",
                        plotData: [
                            {name: 'Current', percent: 10, fill: '#006699'},
                            {name: 'Development', percent: 10, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "274 - 283",
                        plotData: [
                            {name: 'Current', percent: 10, fill: '#006699'},
                            {name: 'Development', percent: 10, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "284 - 291",
                        plotData: [
                            {name: 'Current', percent: 13, fill: '#006699'},
                            {name: 'Development', percent: 10, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "292 - 298",
                        plotData: [
                            {name: 'Current', percent: 9, fill: '#006699'},
                            {name: 'Development', percent: 8, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "299 - 305",
                        plotData: [
                            {name: 'Current', percent: 10, fill: '#006699'},
                            {name: 'Development', percent: 9, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "306 - 312",
                        plotData: [
                            {name: 'Current', percent: 10, fill: '#006699'},
                            {name: 'Development', percent: 9, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "313 - 330",
                        plotData: [
                            {name: 'Current', percent: 17, fill: '#006699'},
                            {name: 'Development', percent: 17, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "331 - 341",
                        plotData: [
                            {name: 'Current', percent: 6, fill: '#006699'},
                            {name: 'Development', percent: 8, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                    {
                        name: "342+",
                        plotData: [
                            {name: 'Current', percent: 7, fill: '#006699'},
                            {name: 'Development', percent: 8, fill: '#00aaff'},
                            {name: 'filler', percent: 100, fill: '#fff'}
                        ]
                    },
                ]
            },
            popRadialOptions: {
                chartStartAngle: 90,
                chartEndAngle: -270,
                chartInnerRadius: 75,
                chartOuterRadius: 40,
                chartBarSize: 10,
                barStartAngle: 90,
                barEndAngle: -270,
                barMinAngle: 15,
                barBackground: true,
                barClockWise: true,
                barDataKey: 'percent'
            },
            // data for character analysis character card
            characterData: {
                nationality: [
                    {
                        name: 'NK - Illegal',
                        score: '-0.17'
                    },
                    {
                        name: 'Saudi',
                        score: '-0.11'
                    },
                    {
                        name: 'Bangladesh',
                        score: '-0.14'
                    },
                    {
                        name: 'Egypt & Syria',
                        score: '-0.11'
                    },
                    {
                        name: 'Rest',
                        score: '-0.43'
                    },
                    {
                        name: 'Kuwait',
                        score: '-2.59'
                    },
                    {
                        name: 'PH & Jordan',
                        score: '-0.31'
                    },
                    {
                        name: 'India, Pakistan & Lebanon',
                        score: '5.75'
                    }
                ]
            },
            // data for frontend final report
            frontendFinal: {
                data: [
                    {name: '0 - 261', Current: 89, Development: 66},
                    {name: '262 - 273', Current: 89, Development: 77},
                    {name: '274 - 283', Current: 90, Development: 78},
                    {name: '284 - 291', Current: 91, Development: 82},
                    {name: '292 - 298', Current: 95, Development: 82},
                    {name: '299 - 305', Current: 95, Development: 84},
                    {name: '306 - 312', Current: 94, Development: 87},
                    {name: '313 - 330', Current: 97, Development: 89},
                    {name: '331 - 341', Current: 98, Development: 90},
                    {name: '342+', Current: 99, Development: 92}
                ],
                chartMargin: {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                },
                chartBarGap: 4,
                chartBarSize: 40,
                xAxisDataKey: "name",
                // return yAxis ticks with percent symbol
                yAxisTickFormatter: (data) => `${data}%`,
                cartesianDasharray: "1 1",
                barData: [
                    {
                        dataKey: "Current",
                        fill: "#006699"
                    },
                    {
                        dataKey: "Development",
                        fill: "#00aaff"
                    }
                ]
            }
        }
    }

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
                                <RechartGauge psi={this.state.psi} />
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

                <div className="flex-box frontend-card">
                    <div className="flex-items frontend-psi-radial">
                        <div className="flex-box">
                            <div className="flex-items frontend-card-head">
                                Population Stability
                            </div>
                        </div>
                        <div className="flex-box frontend-population-stability">
                            {this.state.popRadial.data.map((data, index) =>
                                <div key={index} className="flex-items frontend-population-radial">
                                    <RechartRadialBar
                                        name={data.name}
                                        data={data.plotData}
                                        chartStartAngle={this.state.popRadialOptions.chartStartAngle}
                                        chartEndAngle={this.state.popRadialOptions.chartEndAngle}
                                        chartInnerRadius={this.state.popRadialOptions.chartInnerRadius}
                                        chartOuterRadius={this.state.popRadialOptions.chartOuterRadius}
                                        chartBarSize={this.state.popRadialOptions.chartBarSize}
                                        barStartAngle={this.state.popRadialOptions.barStartAngle}
                                        barEndAngle={this.state.popRadialOptions.barEndAngle}
                                        barMinAngle={this.state.popRadialOptions.barMinAngle}
                                        // barLabel={this.renderCustomizedLabel}
                                        barBackground={this.state.popRadialOptions.barBackground}
                                        barClockWise={this.state.popRadialOptions.barClockWise}
                                        barDataKey={this.state.popRadialOptions.barDataKey}
                                    />
                                </div>
                            )}
                            {/* <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                                </div>
                                <div className="flex-items frontend-population-radial">
                                <RechartRadialBar name="wert" />
                            </div> */}
                        </div>
                        <div className="flex-box frontend-pop-legend-wrapper">
                            <div className="flex-items frontend-pop-legend">
                                <span className="pop-cur-bullet">&#x25fc;</span> Current
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="pop-dev-bullet">&#x25fc;</span> Development
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-box frontend-card">
                    <div className="flex-items frontend-char-analysis-wrapper">
                        <div className="flex-box">
                            <div className="flex-items frontend-card-head">
                                Characteristics Analysis
                            </div>
                        </div>
                        <div className="flex-box char-analysis-scorecards-wrapper">
                            {this.state.characterData.nationality.map((data, index) =>
                                <CharacterCard
                                    key={index}
                                    name={data.name}
                                    score={data.score}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex-box frontend-card">
                    <div className="flex-items frontend-final-report-wrapper">
                        <div className="flex-box">
                            <div className="flex-items frontend-card-head">
                                Final Decision Report
                            </div>
                        </div>
                        <div className="flex-box frontend-final-report-graph">
                            <RechartBar
                                data={this.state.frontendFinal.data}
                                chartMargin={this.state.frontendFinal.chartMargin}
                                chartBarGap={this.state.frontendFinal.chartBarGap}
                                chartBarSize={this.state.frontendFinal.chartBarSize}
                                xAxisDataKey={this.state.frontendFinal.xAxisDataKey}
                                yAxisTickFormatter={this.state.frontendFinal.yAxisTickFormatter}
                                cartesianDasharray={this.state.frontendFinal.cartesianDasharray}
                                barData={this.state.frontendFinal.barData}
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FrontEnd
