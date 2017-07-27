import React, { Component } from 'react'
import RechartLine from './RechartLine.js'
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

            </div>
        )
    }
}

export default BackEnd
