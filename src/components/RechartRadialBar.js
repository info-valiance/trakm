import React, { Component } from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'

class RechartRadialBar extends Component {
    /*global renderCustomizedLabel:true*/
    renderCustomizedLabel = ({ viewBox }) => {
        return (
            <text x={viewBox.cx} y={viewBox.cy} fill="#2e3d49" textAnchor="middle" fontSize={13} dominantBaseline="central">
                {`${this.props.name}`}
            </text>
        );
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart
                    data={[
                        {name: 'Current', percent: 10, fill: '#006699'},
                        {name: 'Development', percent: 8, fill: '#00aaff'},
                        {name: 'filler', percent: 100, fill: '#fff'}
                    ]}
                    // cx={150}
                    // cy={150}
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={75}
                    outerRadius={40}
                    barSize={10}
                >
                    <RadialBar
                        // minAngle={15}
                        startAngle={90}
                        endAngle={-270}
                        minAngle={15}
                        label={this.renderCustomizedLabel}
                        background
                        clockWise={true}
                        dataKey='percent'
                    />
                    <Tooltip />
                    {/* <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout='vertical'
                        verticalAlign='middle'
                        wrapperStyle={{
                            top: 0,
                            left: 350,
                            lineHeight: '24px'
                        }}
                    /> */}
                </RadialBarChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartRadialBar
