import React, { Component } from 'react'
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class RechartComposed extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height={500}>
                <ComposedChart
                    data={[
                        {name: 'NK - Illegal', Development: 11, Current: 27, Score: 17},
                        {name: 'Saudi', Development: 16, Current: 17, Score: 26},
                        {name: 'Bangladesh', Development: 27, Current: 160, Score: 37},
                        {name: 'Egypt & Syria', Development: 40, Current: 44, Score: 47},
                        {name: 'Rest', Development: 52, Current: 43, Score: 53},
                        {name: 'Kuwait', Development: 58, Current: 47, Score: 56},
                        {name: 'PH & Jordan', Development: 75, Current: 67, Score: 62},
                        {name: 'India, Pakistan and Lebanon', Development: 116, Current: 117, Score: 72}
                    ]}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid stroke='#f5f5f5'/>
                    <Line
                        type='monotone'
                        dataKey='Development'
                        stroke='#00aaff'
                    />
                    <Line
                        type='monotone'
                        dataKey='Current'
                        stroke='#006699'
                    />
                    <Bar
                        dataKey='Score'
                        barSize={20}
                        fill='#173d5d'
                    />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartComposed
