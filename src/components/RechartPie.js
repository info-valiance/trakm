import React, { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

class RechartPie extends Component {
    render() {
        const colors = ['#f9705d', 'gold', '#63f763'];
        const data = [
            { name: "Low Performing", value: 40 },
            { name: "Fairly Performing", value: 60 },
            { name: "High Performing", value: 100 }
        ]

        return (
            <ResponsiveContainer width="100%" height={350}>
                <PieChart width={730} height={250}>
                    <Pie dataKey="value" data={data} startAngle={90} endAngle={-270} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label>
                        {
                            data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartPie
