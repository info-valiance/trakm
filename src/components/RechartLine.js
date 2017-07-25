import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class RechartLine extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={600}
                    height={300}
                    data={[
                        {'Cumulative Good': '0%', Development: 0, Current: 0, 'Cumulative Bad': 0},
                        {'Cumulative Good': '5%', Development: 30, Current: 25, 'Cumulative Bad': 5},
                        {'Cumulative Good': '10%', Development: 45, Current: 42, 'Cumulative Bad': 10},
                        {'Cumulative Good': '15%', Development: 55, Current: 50, 'Cumulative Bad': 15},
                        {'Cumulative Good': '20%', Development: 62, Current: 60, 'Cumulative Bad': 20},
                        {'Cumulative Good': '25%', Development: 70, Current: 67, 'Cumulative Bad': 25},
                        {'Cumulative Good': '30%', Development: 72, Current: 70, 'Cumulative Bad': 30},
                        {'Cumulative Good': '35%', Development: 75, Current: 72, 'Cumulative Bad': 35},
                        {'Cumulative Good': '40%', Development: 79, Current: 75, 'Cumulative Bad': 40},
                        {'Cumulative Good': '45%', Development: 83, Current: 78, 'Cumulative Bad': 45},
                        {'Cumulative Good': '50%', Development: 84, Current: 80, 'Cumulative Bad': 50},
                        {'Cumulative Good': '55%', Development: 89, Current: 85, 'Cumulative Bad': 55},
                        {'Cumulative Good': '60%', Development: 91, Current: 88, 'Cumulative Bad': 60},
                        {'Cumulative Good': '65%', Development: 92, Current: 90, 'Cumulative Bad': 65},
                        {'Cumulative Good': '70%', Development: 93, Current: 93, 'Cumulative Bad': 70},
                        {'Cumulative Good': '75%', Development: 95, Current: 94, 'Cumulative Bad': 75},
                        {'Cumulative Good': '80%', Development: 96, Current: 95, 'Cumulative Bad': 80},
                        {'Cumulative Good': '85%', Development: 97, Current: 96, 'Cumulative Bad': 85},
                        {'Cumulative Good': '90%', Development: 98, Current: 98, 'Cumulative Bad': 90},
                        {'Cumulative Good': '95%', Development: 99, Current: 98, 'Cumulative Bad': 95},
                        {'Cumulative Good': '100%', Development: 100, Current: 100, 'Cumulative Bad': 100},
                    ]}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <XAxis dataKey="Cumulative Good"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Development"
                        stroke="#8884d8"
                        activeDot={{r: 8}}
                    />
                    <Line
                        type="monotone"
                        dataKey="Current"
                        stroke="#82ca9d"
                    />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartLine
