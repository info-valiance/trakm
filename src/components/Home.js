import React, { Component } from 'react'
// import VicPieChart from './VicPieChart.js'
import RechartPie from './RechartPie.js'
import '../css/Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data1: [
                { name: "Low Performing", value: 40 },
                { name: "Fairly Performing", value: 60 },
                { name: "High Performing", value: 100 }
            ],
            data2: [
                { name: "0-3 months", value: 30 },
                { name: "3-6 months", value: 25 },
                { name: "6-9 months", value: 15 },
                { name: "9-12 months", value: 10 },
                { name: "12-18 months", value: 10 },
                { name: "18-24 months", value: 7 },
                { name: "24+ months", value: 3 }
            ]
        }
    }

    /*global renderCustomizedLabel:true*/
    renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 1.6;
        const x  = cx + radius * Math.cos(-midAngle * (Math.PI/180));
        const y = cy  + radius * Math.sin(-midAngle * (Math.PI/180));

        return (
            <text x={x} y={y} fill="#2e3d49" textAnchor={x > cx ? 'start' : 'end'} fontSize={13} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    render() {
        return (
            <div className="home-content-wrapper">
                <div className="flex-box home-addmodel-graph-wrapper">
                    <div className="flex-items home-graphs">
                        <div className="card-accent"></div>
                        <div className="home-graph-part"></div>
                        <div className="flex-box">
                            <div className="flex-items perf-dist-wrapper">
                                <h1>Performance Distribution of Models</h1>
                                {/* <VicPieChart /> */}
                                <RechartPie
                                    data={this.state.data1}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={65}
                                    outerRadius={100}
                                    fill="#82ca9d"
                                    labelLine={true}
                                    label="label"
                                    colors={['#f9705d', 'gold', '#63f763']}
                                />
                            </div>
                            <div className="flex-items age-dist-wrapper">
                                <h1>Age Distribution of Models</h1>
                                {/* <VicPieChart /> */}
                                <RechartPie
                                    data={this.state.data2}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={65}
                                    outerRadius={100}
                                    fill="#82ca9d"
                                    labelLine={true}
                                    label={this.renderCustomizedLabel}
                                    colors={['#006699', '#0088cc', '#00aaff', '#33bbff', '#66ccff', '#80d4ff', '#b3e6ff']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-items home-add-model">kd</div>
                </div>
            </div>
        )
    }
}

export default Home
