import React, { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

class RechartPie extends Component {
    render() {
        let colors = this.props.colors

        return (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={this.props.data}
                        dataKey={this.props.dataKey}
                        startAngle={this.props.startAngle}
                        endAngle={this.props.endAngle}
                        cx={this.props.cx}
                        cy={this.props.cy}
                        innerRadius={this.props.innerRadius}
                        outerRadius={this.props.outerRadius}
                        fill={this.props.fill}
                        label={this.props.label}
                    >
                        {
                            this.props.data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)
                        }
                    </Pie>
                    <Legend verticalAlign="bottom"
                        iconType="circle"
                        iconSize={12}
                        wrapperStyle={{
                            fontSize: "12px"
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartPie
