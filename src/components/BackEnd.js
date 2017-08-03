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
            // data for Score to Odds
            scoreOdds: {
                devBadRate: "1.8%",
                curBadRate: "1.7%",
                data: [
                    {
                        Score: '0 - 261',
                        Development: 11,
                        Current: 13,
                        devBad: 230,
                        devGood: 2530,
                        curBad: 260,
                        curGood: 3403,
                    },
                    {
                        Score: '262 - 273',
                        Development: 34,
                        Current: 34,
                        devBad: 75,
                        devGood: 2532,
                        curBad: 99,
                        curGood: 3354,
                    },
                    {
                        Score: '274 - 283',
                        Development: 44,
                        Current: 49,
                        devBad: 64,
                        devGood: 2810,
                        curBad: 65,
                        curGood: 3215,
                    },
                    {
                        Score: '284 - 291',
                        Development: 67,
                        Current: 88,
                        devBad: 39,
                        devGood: 2603,
                        curBad: 41,
                        curGood: 3623,
                    },
                    {
                        Score: '292 - 298',
                        Development: 75,
                        Current: 111,
                        devBad: 33,
                        devGood: 2468,
                        curBad: 29,
                        curGood: 3207,
                    },
                    {
                        Score: '299 - 305',
                        Development: 111,
                        Current: 100,
                        devBad: 25,
                        devGood: 2766,
                        curBad: 33,
                        curGood: 3300,
                    },
                    {
                        Score: '306 - 312',
                        Development: 142,
                        Current: 111,
                        devBad: 19,
                        devGood: 2703,
                        curBad: 30,
                        curGood: 3323,
                    },
                    {
                        Score: '313 - 330',
                        Development: 182,
                        Current: 181,
                        devBad: 30,
                        devGood: 5446,
                        curBad: 31,
                        curGood: 5622,
                    },
                    {
                        Score: '331 - 341',
                        Development: 247,
                        Current: 206,
                        devBad: 11,
                        devGood: 2722,
                        curBad: 12,
                        curGood: 2470,
                    },
                    {
                        Score: '342+',
                        Development: 917,
                        Current: 517,
                        devBad: 3,
                        devGood: 2751,
                        curBad: 5,
                        curGood: 2587,
                    }
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
            scoreOddsTable: false,
            // data for Character Analysis
            charSelectValue: "nationality",
            characterData: {
                // Nationality
                nationality: [
                    {
                        name: 'NK - Illegal',
                        Development: 11,
                        Current: 27,
                        Score: 17,
                        devBad: 68,
                        devGood: 750,
                        curBad: 24,
                        curGood: 641,
                    },
                    {
                        name: 'Saudi',
                        Development: 16,
                        Current: 17,
                        Score: 26,
                        devBad: 24,
                        devGood: 384,
                        curBad: 23,
                        curGood: 387,
                    },
                    {
                        name: 'Bangladesh',
                        Development: 27,
                        Current: 160,
                        Score: 37,
                        devBad: 8,
                        devGood: 214,
                        curBad: 1,
                        curGood: 160,
                    },
                    {
                        name: 'Egypt & Syria',
                        Development: 40,
                        Current: 44,
                        Score: 47,
                        devBad: 80,
                        devGood: 3161,
                        curBad: 84,
                        curGood: 3678,
                    },
                    {
                        name: 'Rest',
                        Development: 52,
                        Current: 43,
                        Score: 53,
                        devBad: 19,
                        devGood: 979,
                        curBad: 21,
                        curGood: 897,
                    },
                    {
                        name: 'Kuwait',
                        Development: 58,
                        Current: 47,
                        Score: 56,
                        devBad: 237,
                        devGood: 13779,
                        curBad: 341,
                        curGood: 16170,
                    },
                    {
                        name: 'PH & Jordan',
                        Development: 75,
                        Current: 67,
                        Score: 62,
                        devBad: 17,
                        devGood: 1275,
                        curBad: 16,
                        curGood: 1072,
                    },
                    {
                        name: 'India, Pakistan and Lebanon',
                        Development: 116,
                        Current: 117,
                        Score: 72,
                        devBad: 76,
                        devGood: 8789,
                        curBad: 95,
                        curGood: 11099,
                    }
                ],
                // Total Salary
                totSal: [
                    {
                        name: '<900',
                        Development: 38,
                        Current: 33,
                        Score: 17,
                        devBad: 100,
                        devGood: 3848,
                        curBad: 126,
                        curGood: 4174,
                    },
                    {
                        name: '>=900 - <1200',
                        Development: 42,
                        Current: 35,
                        Score: 19,
                        devBad: 97,
                        devGood: 4115,
                        curBad: 141,
                        curGood: 4904,
                    },
                    {
                        name: '>=1200 - <1500',
                        Development: 98,
                        Current: 73,
                        Score: 38,
                        devBad: 28,
                        devGood: 2737,
                        curBad: 46,
                        curGood: 3335,
                    },
                    {
                        name: '>=1500',
                        Development: 257,
                        Current: 134,
                        Score: 59,
                        devBad: 12,
                        devGood: 3079,
                        curBad: 28,
                        curGood: 3757,
                    },
                    {
                        name: 'Non-Kuwait',
                        Development: 53,
                        Current: 68,
                        Score: 24,
                        devBad: 292,
                        devGood: 1552,
                        curBad: 264,
                        curGood: 17934,
                    }
                ]
            },
            currentCharacterData: "",
            characterTable: false,
            // data for Gini
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
            // data for KS
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
            // Vintage Analysis
            vintage30dpd: {
                data: [
                    {Model: 'M1', 'Q2-2014': 0.1, 'Q3-2014': 0.0, 'Q4-2014': 0.0, 'Q1-2015': 0.1, 'Q2-2015': 0.0, 'Q3-2015': 0.0, 'Q4-2015': 0.0, 'Q1-2016': 0.0},
                    {Model: 'M2', 'Q2-2014': 1.1, 'Q3-2014': 1.1, 'Q4-2014': 0.8, 'Q1-2015': 0.7, 'Q2-2015': 0.4, 'Q3-2015': 0.2, 'Q4-2015': 0.1, 'Q1-2016': 0.1},
                    {Model: 'M3', 'Q2-2014': 1.9, 'Q3-2014': 1.9, 'Q4-2014': 1.5, 'Q1-2015': 1.1, 'Q2-2015': 0.9, 'Q3-2015': 0.6, 'Q4-2015': 0.3, 'Q1-2016': 0.4},
                    {Model: 'M4', 'Q2-2014': 3.0, 'Q3-2014': 2.6, 'Q4-2014': 2.2, 'Q1-2015': 1.7, 'Q2-2015': 1.5, 'Q3-2015': 0.8, 'Q4-2015': 0.5, 'Q1-2016': 0.5},
                    {Model: 'M5', 'Q2-2014': 3.9, 'Q3-2014': 3.5, 'Q4-2014': 2.7, 'Q1-2015': 2.3, 'Q2-2015': 2.0, 'Q3-2015': 1.0, 'Q4-2015': 0.8, 'Q1-2016': 0.6},
                    {Model: 'M6', 'Q2-2014': 4.4, 'Q3-2014': 4.2, 'Q4-2014': 3.3, 'Q1-2015': 3.1, 'Q2-2015': 2.4, 'Q3-2015': 1.3, 'Q4-2015': 1.0, 'Q1-2016': 0.8},
                    {Model: 'M7', 'Q2-2014': 5.1, 'Q3-2014': 4.9, 'Q4-2014': 4.0, 'Q1-2015': 3.7, 'Q2-2015': 2.7, 'Q3-2015': 1.6, 'Q4-2015': 1.2, 'Q1-2016': 0.8},
                    {Model: 'M8', 'Q2-2014': 5.7, 'Q3-2014': 5.5, 'Q4-2014': 4.8, 'Q1-2015': 4.3, 'Q2-2015': 3.2, 'Q3-2015': 1.9, 'Q4-2015': 1.3, 'Q1-2016': null},
                    {Model: 'M9', 'Q2-2014': 6.3, 'Q3-2014': 6.1, 'Q4-2014': 5.6, 'Q1-2015': 4.6, 'Q2-2015': 3.6, 'Q3-2015': 2.2, 'Q4-2015': 1.5, 'Q1-2016': null},
                    {Model: 'M10', 'Q2-2014': 6.9, 'Q3-2014': 6.7, 'Q4-2014': 6.5, 'Q1-2015': 5.1, 'Q2-2015': 4.0, 'Q3-2015': 2.5, 'Q4-2015': 1.5, 'Q1-2016': null},
                    {Model: 'M11', 'Q2-2014': 7.3, 'Q3-2014': 7.5, 'Q4-2014': 7.2, 'Q1-2015': 5.6, 'Q2-2015': 4.4, 'Q3-2015': 2.9, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M12', 'Q2-2014': 7.8, 'Q3-2014': 8.3, 'Q4-2014': 7.7, 'Q1-2015': 6.1, 'Q2-2015': 4.7, 'Q3-2015': 3.1, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M13', 'Q2-2014': 8.3, 'Q3-2014': 8.9, 'Q4-2014': 8.2, 'Q1-2015': 6.5, 'Q2-2015': 5.1, 'Q3-2015': 3.1, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M14', 'Q2-2014': 9.0, 'Q3-2014': 9.2, 'Q4-2014': 8.7, 'Q1-2015': 6.8, 'Q2-2015': 5.4, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M15', 'Q2-2014': 9.4, 'Q3-2014': 9.8, 'Q4-2014': 9.1, 'Q1-2015': 7.2, 'Q2-2015': 5.5, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M16', 'Q2-2014': 9.9, 'Q3-2014': 10.2, 'Q4-2014': 9.5, 'Q1-2015': 7.5, 'Q2-2015': 5.5, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M17', 'Q2-2014': 10.2, 'Q3-2014': 10.5, 'Q4-2014': 9.9, 'Q1-2015': 7.8, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M18', 'Q2-2014': 10.5, 'Q3-2014': 10.9, 'Q4-2014': 10.3, 'Q1-2015': 7.9, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M19', 'Q2-2014': 11.0, 'Q3-2014': 11.3, 'Q4-2014': 10.7, 'Q1-2015': 7.9, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M20', 'Q2-2014': 11.3, 'Q3-2014': 11.6, 'Q4-2014': 11.0, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M21', 'Q2-2014': 11.7, 'Q3-2014': 11.9, 'Q4-2014': 11.1, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M22', 'Q2-2014': 12.1, 'Q3-2014': 12.2, 'Q4-2014': 11.1, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M23', 'Q2-2014': 12.2, 'Q3-2014': 12.4, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M24', 'Q2-2014': 12.6, 'Q3-2014': 12.5, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M25', 'Q2-2014': 12.9, 'Q3-2014': 12.5, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M26', 'Q2-2014': 13.2, 'Q3-2014': null, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                ],
                xAxisDataKey: "Model",
                xAxisText: "",
                yAxisText: "",
                legendLayout: "horizontal",
                legendHeight: 50,
                legendWrapperStyle: {
                    bottom: -15
                },
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
                        dataKey: "Q4-2015",
                        stroke: "#8BC34A"
                    },
                    {
                        dataKey: "Q1-2016",
                        stroke: "#CDDC39"
                    }
                ]
            },
            vintage60dpd: {
                data: [
                    {Model: 'M1', 'Q2-2014': 0.0, 'Q3-2014': 0.0, 'Q4-2014': 0.0, 'Q1-2015': 0.0, 'Q2-2015': 0.0, 'Q3-2015': 0.0, 'Q4-2015': 0.0, 'Q1-2016': 0.0},
                    {Model: 'M2', 'Q2-2014': 0.0, 'Q3-2014': 0.0, 'Q4-2014': 0.0, 'Q1-2015': 0.0, 'Q2-2015': 0.0, 'Q3-2015': 0.0, 'Q4-2015': 0.0, 'Q1-2016': 0.0},
                    {Model: 'M3', 'Q2-2014': 0.5, 'Q3-2014': 0.5, 'Q4-2014': 0.4, 'Q1-2015': 0.3, 'Q2-2015': 0.2, 'Q3-2015': 0.1, 'Q4-2015': 0.0, 'Q1-2016': 0.0},
                    {Model: 'M4', 'Q2-2014': 0.9, 'Q3-2014': 1.0, 'Q4-2014': 0.7, 'Q1-2015': 0.6, 'Q2-2015': 0.4, 'Q3-2015': 0.2, 'Q4-2015': 0.1, 'Q1-2016': 0.1},
                    {Model: 'M5', 'Q2-2014': 1.4, 'Q3-2014': 1.3, 'Q4-2014': 1.1, 'Q1-2015': 0.8, 'Q2-2015': 0.7, 'Q3-2015': 0.4, 'Q4-2015': 0.2, 'Q1-2016': 0.1},
                    {Model: 'M6', 'Q2-2014': 2.1, 'Q3-2014': 1.8, 'Q4-2014': 1.3, 'Q1-2015': 1.2, 'Q2-2015': 0.9, 'Q3-2015': 0.5, 'Q4-2015': 0.3, 'Q1-2016': 0.1},
                    {Model: 'M7', 'Q2-2014': 2.5, 'Q3-2014': 2.3, 'Q4-2014': 1.7, 'Q1-2015': 1.6, 'Q2-2015': 1.1, 'Q3-2015': 0.5, 'Q4-2015': 0.4, 'Q1-2016': 0.1},
                    {Model: 'M8', 'Q2-2014': 2.9, 'Q3-2014': 2.8, 'Q4-2014': 2.1, 'Q1-2015': 1.9, 'Q2-2015': 1.3, 'Q3-2015': 0.7, 'Q4-2015': 0.5, 'Q1-2016': null},
                    {Model: 'M9', 'Q2-2014': 3.1, 'Q3-2014': 3.0, 'Q4-2014': 2.5, 'Q1-2015': 2.3, 'Q2-2015': 1.4, 'Q3-2015': 0.9, 'Q4-2015': 0.5, 'Q1-2016': null},
                    {Model: 'M10', 'Q2-2014': 3.4, 'Q3-2014': 3.4, 'Q4-2014': 3.0, 'Q1-2015': 2.5, 'Q2-2015': 1.7, 'Q3-2015': 1.0, 'Q4-2015': 0.5, 'Q1-2016': null},
                    {Model: 'M11', 'Q2-2014': 3.7, 'Q3-2014': 3.8, 'Q4-2014': 3.4, 'Q1-2015': 2.7, 'Q2-2015': 1.9, 'Q3-2015': 1.2, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M12', 'Q2-2014': 4.0, 'Q3-2014': 4.3, 'Q4-2014': 3.8, 'Q1-2015': 3.0, 'Q2-2015': 2.1, 'Q3-2015': 1.1, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M13', 'Q2-2014': 4.3, 'Q3-2014': 4.7, 'Q4-2014': 4.1, 'Q1-2015': 3.3, 'Q2-2015': 2.2, 'Q3-2015': 1.1, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M14', 'Q2-2014': 4.7, 'Q3-2014': 5.1, 'Q4-2014': 4.5, 'Q1-2015': 3.5, 'Q2-2015': 2.3, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M15', 'Q2-2014': 5.1, 'Q3-2014': 5.4, 'Q4-2014': 4.8, 'Q1-2015': 3.8, 'Q2-2015': 2.4, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M16', 'Q2-2014': 5.2, 'Q3-2014': 5.8, 'Q4-2014': 5.0, 'Q1-2015': 3.9, 'Q2-2015': 2.4, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M17', 'Q2-2014': 5.4, 'Q3-2014': 6.1, 'Q4-2014': 5.2, 'Q1-2015': 4.1, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M18', 'Q2-2014': 5.6, 'Q3-2014': 6.3, 'Q4-2014': 5.5, 'Q1-2015': 4.1, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M19', 'Q2-2014': 5.9, 'Q3-2014': 6.6, 'Q4-2014': 5.7, 'Q1-2015': 4.1, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M20', 'Q2-2014': 6.2, 'Q3-2014': 6.7, 'Q4-2014': 5.9, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M21', 'Q2-2014': 6.4, 'Q3-2014': 6.9, 'Q4-2014': 6.0, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M22', 'Q2-2014': 6.7, 'Q3-2014': 7.2, 'Q4-2014': 6.0, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M23', 'Q2-2014': 6.9, 'Q3-2014': 7.3, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M24', 'Q2-2014': 7.2, 'Q3-2014': 7.4, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M25', 'Q2-2014': 7.5, 'Q3-2014': 7.4, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                    {Model: 'M26', 'Q2-2014': 7.6, 'Q3-2014': null, 'Q4-2014': null, 'Q1-2015': null, 'Q2-2015': null, 'Q3-2015': null, 'Q4-2015': null, 'Q1-2016': null},
                ],
                xAxisDataKey: "Model",
                xAxisText: "",
                yAxisText: "",
                legendLayout: "horizontal",
                legendHeight: 50,
                legendWrapperStyle: {
                    bottom: -15
                },
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
                        dataKey: "Q4-2015",
                        stroke: "#8BC34A"
                    },
                    {
                        dataKey: "Q1-2016",
                        stroke: "#CDDC39"
                    }
                ]
            },
            vintage30Table: false,
            vintage60Table: false,
        }

        this.handleCharChange = this.handleCharChange.bind(this);
        this.handleTableShow = this.handleTableShow.bind(this);
    }

    componentWillMount() {
        this.setState({
            currentCharacterData: this.state.characterData.nationality
        })
    }

    handleCharChange(event) {
        this.setState({
                charSelectValue: event.target.value,
                currentCharacterData: this.state.characterData[event.target.value]
        })
    }

    handleTableShow(event) {
        event.target.innerText = event.target.innerText === 'Show Table' ? 'Show Graph' : 'Show Table';
        if(event.target.classList.contains('scoreOddsTableBtn')) {
            this.setState({
                    scoreOddsTable: !this.state.scoreOddsTable
            })
        }
        if(event.target.classList.contains('characterTableBtn')) {
            this.setState({
                    characterTable: !this.state.characterTable
            })
        }
        if(event.target.classList.contains('vintage30TableBtn')) {
            this.setState({
                    vintage30Table: !this.state.vintage30Table
            })
        }
        if(event.target.classList.contains('vintage60TableBtn')) {
            this.setState({
                    vintage60Table: !this.state.vintage60Table
            })
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
                        Current Window:
                        &nbsp;
                        <select className="char-analysis-select" value="1">
                            <option value="1">1st Jan 2014 - 31st Dec 2014</option>
                        </select>
                    </div>
                </div>

                <div className="flex-box backend-card">
                    <div className="flex-items backend-odds">
                        <div className="card-accent"></div>
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Score to Odds Report
                                <button className="show-table-graph-btn scoreOddsTableBtn" onClick={this.handleTableShow}>Show Table</button>
                            </div>
                        </div>
                        <div className="flex-box backend-odds-text-wrapper">
                            <div className="flex-items">
                                Development Bad Rate - <span className="backend-odds-dev-rate">{this.state.scoreOdds.devBadRate}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Current Bad Rate - <span className="backend-odds-cur-rate">{this.state.scoreOdds.curBadRate}</span>
                            </div>
                        </div>

                        {!this.state.scoreOddsTable && (
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
                        )}

                        {this.state.scoreOddsTable && (
                            <div className="flex-box">
                                <div className="flex-items odds-table-wrapper">
                                    <table className="odds-table">
                                        <tbody>
                                            <tr className="odds-table-head">
                                                <td></td>
                                                <td colSpan="2">
                                                    Development
                                                </td>
                                                <td colSpan="2">
                                                    Current
                                                </td>
                                                <td colSpan="2">
                                                    Odds
                                                </td>
                                            </tr>
                                            <tr className="odds-table-head">
                                                <td>
                                                    Score
                                                </td>
                                                <td>
                                                    Bad
                                                </td>
                                                <td>
                                                    Good
                                                </td>
                                                <td>
                                                    Bad
                                                </td>
                                                <td>
                                                    Good
                                                </td>
                                                <td>
                                                    Development
                                                </td>
                                                <td>
                                                    Current
                                                </td>
                                            </tr>
                                            {this.state.scoreOdds.data.map((data, index) =>
                                                <tr key={index}>
                                                    <td>
                                                        {data.Score}
                                                    </td>
                                                    <td>
                                                        {data.devBad}
                                                    </td>
                                                    <td>
                                                        {data.devGood}
                                                    </td>
                                                    <td>
                                                        {data.curBad}
                                                    </td>
                                                    <td>
                                                        {data.curGood}
                                                    </td>
                                                    <td>
                                                        {data.Development}
                                                    </td>
                                                    <td>
                                                        {data.Current}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="flex-box backend-card">
                    <div className="flex-items backend-char-analysis-wrapper">
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Characteristics Analysis
                                <button className="show-table-graph-btn characterTableBtn" onClick={this.handleTableShow}>Show Table</button>
                            </div>
                            <div className="card-accent"></div>
                        </div>
                        <div className="flex-box">
                            <div className="flex-items char-analysis-select-wrapper">
                                <select className="char-analysis-select" value={this.state.charSelectValue} onChange={this.handleCharChange}>
                                    <option value="nationality">Nationality</option>
                                    <option value="totSal">Total Salary</option>
                                    <option disabled value="salAcc">Salaried Account</option>
                                    <option disabled value="worstDelinquency">Worst Delinquency Currently at Ci-Net</option>
                                    <option disabled value="loanPeriod">Loan Period</option>
                                    <option disabled value="gender">Gender</option>
                                    <option disabled value="bankMonths">Months at Bank</option>
                                    <option disabled value="empYears">Years at Current Employment</option>
                                    <option disabled value="loanAmt">Loan Amount</option>
                                </select>
                            </div>
                        </div>

                        {!this.state.characterTable && (
                            <div className="flex-box char-analysis-chart-wrapper">
                                <div className="flex-items char-analysis-chart">
                                    <RechartComposed data={this.state.currentCharacterData} />
                                </div>
                            </div>
                        )}

                        {this.state.characterTable && (
                            <div className="flex-box">
                                <div className="flex-items char-analysis-table-wrapper">
                                    <table className="char-analysis-table">
                                        <tbody>
                                            <tr className="char-analysis-table-head">
                                                <td rowSpan="2">
                                                    {
                                                        this.state.charSelectValue === "nationality" ?
                                                        "Nationality" : this.state.charSelectValue === "totSal" ?
                                                        "Total Salary" : this.state.charSelectValue === "salAcc" ?
                                                        "Salaried Account" : this.state.charSelectValue === "worstDelinquency" ?
                                                        "Worst Delinquency" : this.state.charSelectValue === "loanPeriod" ?
                                                        "Loan Period" : this.state.charSelectValue === "gender" ?
                                                        "Gender" : this.state.charSelectValue === "bankMonths" ?
                                                        "Months at Bank" : this.state.charSelectValue === "empYears" ?
                                                        "Years at Current Employment" : this.state.charSelectValue === "loanAmt" ?
                                                        "Loan Amount" : ""
                                                    }
                                                </td>
                                                <td colSpan="2">
                                                    Development
                                                </td>
                                                <td colSpan="2">
                                                    Current
                                                </td>
                                                <td colSpan="2">
                                                    Odds
                                                </td>
                                                <td rowSpan="2">
                                                    Score
                                                </td>
                                            </tr>
                                            <tr className="char-analysis-table-head">
                                                <td>
                                                    Bad
                                                </td>
                                                <td>
                                                    Good
                                                </td>
                                                <td>
                                                    Bad
                                                </td>
                                                <td>
                                                    Good
                                                </td>
                                                <td>
                                                    Development
                                                </td>
                                                <td>
                                                    Current
                                                </td>
                                            </tr>
                                            {this.state.currentCharacterData.map((data, index) =>
                                                <tr key={index}>
                                                    <td>
                                                        {data.name}
                                                    </td>
                                                    <td>
                                                        {data.devBad}
                                                    </td>
                                                    <td>
                                                        {data.devGood}
                                                    </td>
                                                    <td>
                                                        {data.curBad}
                                                    </td>
                                                    <td>
                                                        {data.curGood}
                                                    </td>
                                                    <td>
                                                        {data.Development}
                                                    </td>
                                                    <td>
                                                        {data.Current}
                                                    </td>
                                                    <td>
                                                        {data.Score}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="flex-box backend-card">
                    <div className="flex-items backend-perf">
                        <div className="flex-box">
                            <div className="flex-items backend-card-head">
                                Scorecard Performance
                            </div>
                            <div className="card-accent"></div>
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
                            <div className="card-accent"></div>
                        </div>
                        <div className="flex-box vintage-analysis-chart-wrapper">
                            <div className="flex-items backend-vintage-30-head">
                                30 DPD Vintage:
                                <button className="show-table-graph-btn vintage30TableBtn" onClick={this.handleTableShow}>Show Table</button>
                            </div>

                            {!this.state.vintage30Table && (
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
                            )}

                            {this.state.vintage30Table && (
                                <div className="flex-items vintage-analysis-table-wrapper">
                                    <table className="vintage-analysis-table">
                                        <tbody>
                                            <tr className="vintage-analysis-table-head">
                                                <td></td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data.Model}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q2-2014</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q2-2014'].toFixed(1)}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q3-2014</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q3-2014'] != null && (
                                                            data['Q3-2014'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q4-2014</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q4-2014'] != null && (
                                                            data['Q4-2014'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q1-2015</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q1-2015'] != null && (
                                                            data['Q1-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q2-2015</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q2-2015'] != null && (
                                                            data['Q2-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q3-2015</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q3-2015'] != null && (
                                                            data['Q3-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q4-2015</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q4-2015'] != null && (
                                                            data['Q4-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q1-2016</td>
                                                {this.state.vintage30dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q1-2016'] != null && (
                                                            data['Q1-2016'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}

                        </div>
                        <div className="flex-box vintage-analysis-chart-wrapper">
                            <div className="flex-items backend-vintage-60-head">
                                60 DPD Vintage:
                                <button className="show-table-graph-btn vintage60TableBtn" onClick={this.handleTableShow}>Show Table</button>
                            </div>

                            {!this.state.vintage60Table && (
                                <div className="flex-items vintage-analysis-chart">
                                    <RechartLine
                                        data={this.state.vintage60dpd.data}
                                        xAxisDataKey={this.state.vintage60dpd.xAxisDataKey}
                                        // xAxisText={this.state.vintage60dpd.xAxisText}
                                        // yAxisText={this.state.vintage60dpd.yAxisText}
                                        xAxisLabel={<AxisLabel axisType='xAxis' text={this.state.vintage60dpd.xAxisText} />}
                                        yAxisLabel={<AxisLabel axisType='yAxis' text={this.state.vintage60dpd.yAxisText} />}
                                        legendLayout={this.state.vintage60dpd.legendLayout}
                                        legendHeight={this.state.vintage60dpd.legendHeight}
                                        legendWrapperStyle={this.state.vintage60dpd.legendWrapperStyle}
                                        linesData={this.state.vintage60dpd.linesData}
                                        yAxisTickFormatter={(data) => `${data}%`}
                                    />
                                </div>
                            )}

                            {this.state.vintage60Table && (
                                <div className="flex-items vintage-analysis-table-wrapper">
                                    <table className="vintage-analysis-table">
                                        <tbody>
                                            <tr className="vintage-analysis-table-head">
                                                <td></td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data.Model}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q2-2014</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q2-2014'].toFixed(1)}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q3-2014</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q3-2014'] != null && (
                                                            data['Q3-2014'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q4-2014</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q4-2014'] != null && (
                                                            data['Q4-2014'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q1-2015</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q1-2015'] != null && (
                                                            data['Q1-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q2-2015</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q2-2015'] != null && (
                                                            data['Q2-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q3-2015</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q3-2015'] != null && (
                                                            data['Q3-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q4-2015</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q4-2015'] != null && (
                                                            data['Q4-2015'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className="vintage-cell-head">Q1-2016</td>
                                                {this.state.vintage60dpd.data.map((data, index) =>
                                                    <td key={index}>
                                                        {data['Q1-2016'] != null && (
                                                            data['Q1-2016'].toFixed(1)
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BackEnd
