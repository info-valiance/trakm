import React, { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

class RechartPie extends Component {
    // /*global renderCustomizedLabel:true*/
    // renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 1.6;
    //     const x  = cx + radius * Math.cos(-midAngle * (Math.PI/180));
    //     const y = cy  + radius * Math.sin(-midAngle * (Math.PI/180));
    //
    //     return (
    //         <text x={x} y={y} fill="#2e3d49" textAnchor={x > cx ? 'start' : 'end'} fontSize={13} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

    render() {
        let colors = this.props.colors

        return (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <text
                        fill={this.props.textCenter.fill}
                        textAnchor={this.props.textCenter.textAnchor}
                        x={this.props.textCenter.x}
                        y={this.props.textCenter.y}
                        fontWeight={this.props.textCenter.fontWeight}
                        fontSize={this.props.textCenter.fontSize}
                        dominantBaseline={this.props.textCenter.dominantBaseline}
                    >
                        {this.props.textCenter.text}
                    </text>
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
