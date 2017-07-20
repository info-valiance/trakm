import React, { Component } from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

class RechartLineArea extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={[
                        {name: '1st Jan 16', Gains: 2, pv: 2400, amt: 2400},
                        {name: '1st Feb 16', Gains: 2, pv: 1398, amt: 2210},
                        {name: '1st Mar 16', Gains: 2.2, pv: 9800, amt: 2290},
                        {name: '1st Apr 16', Gains: 1.5, pv: 3908, amt: 2000},
                        {name: '1st May 16', Gains: 3, pv: 4800, amt: 2181},
                        {name: '1st Jun 16', Gains: 3, pv: 3800, amt: 2500},
                        {name: '1st Jul 16', Gains: 3.4, pv: 4300, amt: 2100},
                        {name: '1st Aug 16', Gains: 3.3, pv: 4300, amt: 2100},
                        {name: '1st Sept 16', Gains: 3.8, pv: 4300, amt: 2100},
                    ]}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#006699" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#006699" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name"/>
                    {/* <YAxis/> */}
                    {/* <CartesianGrid strokeDasharray="3 3"/> */}
                    <Tooltip/>
                    <Area
                        type='linear'
                        dataKey='Gains'
                        stroke='#33bbff'
                        // fill='#80d4ff'
                        fill="url(#colorUv)"
                        dot={{ stroke: '#33bbff', fill: '#33bbff', strokeWidth: 2 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartLineArea
