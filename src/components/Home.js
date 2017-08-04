import React, { Component } from 'react'
import RechartPie from './RechartPie.js'
import ModelListCard from './ModelListCard.js'
import plus from '../img/plus.svg'
import '../css/Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            perfDistData: [
                { name: "Low Performing", value: 40 },
                { name: "Fairly Performing", value: 60 },
                { name: "High Performing", value: 100 }
            ],
            ageDistData: [
                { name: "0-3 months", value: 30 },
                { name: "3-6 months", value: 25 },
                { name: "6-9 months", value: 15 },
                { name: "9-12 months", value: 10 },
                { name: "12-18 months", value: 10 },
                { name: "18-24 months", value: 7 },
                { name: "24+ months", value: 3 }
            ],
            models: [
                {
                    created: '1 Jan 2014',
                    type: 'Classification',
                    technique: 'Logistic Regression',
                    category: 'Marketing',
                    performance: 'low',
                },
                {
                    created: '1 Jan 2014',
                    type: 'Classification',
                    technique: 'Logistic Regression',
                    category: 'Marketing',
                    performance: 'fair',
                },
                {
                    created: '1 Jan 2014',
                    type: 'Classification',
                    technique: 'Logistic Regression',
                    category: 'Marketing',
                    performance: 'high',
                },
                {
                    created: '1 Jan 2014',
                    type: 'Classification',
                    technique: 'Logistic Regression',
                    category: 'Marketing',
                    performance: 'low',
                },
                {
                    created: '1 Jan 2014',
                    type: 'Classification',
                    technique: 'Logistic Regression',
                    category: 'Marketing',
                    performance: 'fair',
                },
                {
                    created: '1 Jan 2014',
                    type: 'Classification',
                    technique: 'Logistic Regression',
                    category: 'Marketing',
                    performance: 'high',
                },
            ],
            modelSelectValue: "all"
        }

        this.handleModelChange = this.handleModelChange.bind(this);
    }


    handleModelChange(event) {
        this.setState({
                modelSelectValue: event.target.value,
        })
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
                                    data={this.state.perfDistData}
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
                                    colors={['#FF8042', '#FFBB28', '#00C49F']}
                                    textCenter={{
                                        text: "200",
                                        fill: "#2e3d49",
                                        x: "50%",
                                        y: "44%",
                                        textAnchor: "middle",
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        dominantBaseline: "central"
                                    }}
                                />
                            </div>
                            <div className="flex-items age-dist-wrapper">
                                <h1>Age Distribution of Models</h1>
                                {/* <VicPieChart /> */}
                                <RechartPie
                                    data={this.state.ageDistData}
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
                                    textCenter={{
                                        text: ""
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-items home-add-model">
                        <div className="flex-box add-model-content-wrapper">
                            <div className="flex-items add-model-content">
                                <img className="add-model-img" src={plus} alt=""/>
                                <button className="add-model-btn">Add Model</button>
                            </div>
                        </div>
                        <div className="card-accent"></div>
                    </div>
                </div>

                <div className="flex-box home-card">
                    <div className="flex-items" style={{width: "100%", position: "relative"}}>
                        <div className="flex-box">
                            <div className="flex-items home-card-head">
                                List of Models
                                <select className="char-analysis-select" value={this.state.modelSelectValue} style={{float: "right"}}  onChange={this.handleModelChange}>
                                    <option value="all">All Models</option>
                                    <option value="high">Best Performing</option>
                                    <option value="low">Worst Performing</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-box model-cards-section">
                            {this.state.modelSelectValue === "high" ?
                                this.state.models.filter(data => data.performance === "high").map((data, index) =>
                                    <ModelListCard key={index} data={data} />
                                ) : this.state.modelSelectValue === "low" ?
                                    this.state.models.filter(data => data.performance === "low").map((data, index) =>
                                        <ModelListCard key={index} data={data} />
                                    ) : this.state.models.map((data, index) =>
                                        <ModelListCard key={index} data={data} />
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
