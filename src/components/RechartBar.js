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
                    data={
                        [
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
                        ]
                    }
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    // barGap={0}
                    barSize={40}
                >
                    <XAxis dataKey="name"/>
                    <YAxis tickFormatter={this.toPercent} />
                    <CartesianGrid strokeDasharray="1 1"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="Current" fill="#006699" />
                    <Bar dataKey="Development" fill="#00aaff" />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartBar
