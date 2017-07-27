import React, { Component } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class RechartBar extends Component {
    // return yAxis ticks with percent symbol
    /*global toPercent:true*/
    toPercent = (data) => {
        return `${data}%`
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    // width={600}
                    // height={300}
                    data={this.props.data}
                    margin={this.props.chartMargin}
                    barGap={this.props.chartBarGap}
                    barSize={this.props.chartBarSize}
                >
                    <XAxis dataKey={this.props.xAxisDataKey}/>
                    <YAxis tickFormatter={this.props.yAxisTickFormatter} />
                    <CartesianGrid strokeDasharray={this.props.cartesianDasharray}/>
                    <Tooltip/>
                    <Legend />
                    {this.props.barData.map((data, index) =>
                        <Bar key={index} dataKey={data.dataKey} fill={data.fill} />
                    )}
                    {/* <Bar dataKey="Current" fill="#006699" />
                    <Bar dataKey="Development" fill="#00aaff" /> */}
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartBar
