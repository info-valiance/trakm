import React, { Component } from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts'

class RechartRadialBar extends Component {
    // Customized label for population radial bar chart
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
                    data={this.props.data}
                    // startAngle={90}
                    // endAngle={-270}
                    // innerRadius={75}
                    // outerRadius={40}
                    // barSize={10}
                    startAngle={this.props.chartStartAngle}
                    endAngle={this.props.chartEndAngle}
                    innerRadius={this.props.chartInnerRadius}
                    outerRadius={this.props.chartOuterRadius}
                    barSize={this.props.chartBarSize}
                >
                    <RadialBar
                        // startAngle={90}
                        // endAngle={-270}
                        // minAngle={15}
                        // label={this.renderCustomizedLabel}
                        // background
                        // clockWise={true}
                        // dataKey='percent'
                        startAngle={this.props.barStartAngle}
                        endAngle={this.props.barEndAngle}
                        minAngle={this.props.barMinAngle}
                        label={this.renderCustomizedLabel}
                        background={this.props.barBackground}
                        clockWise={this.props.barClockWise}
                        dataKey={this.props.barDataKey}
                    />
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
