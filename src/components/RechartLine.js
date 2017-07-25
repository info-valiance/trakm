import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// // X and Y axis label component
// const AxisLabel = (data) => {
//     const isVert = data.axisType === 'yAxis';
//     const cx = isVert ? data.viewBox.x : data.viewBox.x + (data.viewBox.width / 2);
//     const cy = isVert ? (data.viewBox.height / 2) + data.viewBox.y : data.viewBox.y + data.viewBox.height + 10;
//     const rot = isVert ? `270 ${cx} ${cy}` : 0;
//     return (
//         <text x={cx} y={cy} transform={`rotate(${rot})`} fontSize="14px" textAnchor="middle" stroke="#656565">
//             {data.text}
//         </text>
//     );
// };

class RechartLine extends Component {

    render() {
        // // return yAxis ticks with percent symbol
        // const toPercent = (data) => {
        //     return `${data}%`
        // }

        return (
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    data={this.props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    {/* <XAxis dataKey={this.props.xAxisDataKey} label={<AxisLabel axisType='xAxis' text={this.props.xAxisText} />} />
                    <YAxis tickFormatter={toPercent} label={<AxisLabel axisType='yAxis' text={this.props.yAxisText} />} /> */}
                    <XAxis dataKey={this.props.xAxisDataKey} label={this.props.xAxisLabel} />
                    <YAxis tickFormatter={this.props.yAxisTickFormatter} label={this.props.yAxisLabel} />
                    <CartesianGrid strokeDasharray="1 1"/>
                    <Tooltip/>
                    <Legend
                        layout={this.props.legendLayout}
                        height={this.props.legendHeight}
                        wrapperStyle={this.props.legendWrapperStyle}
                    />
                    {/* <Line
                        type="monotone"
                        dataKey="Development"
                        stroke="#00aaff"
                        />
                        <Line
                        type="monotone"
                        dataKey="Current"
                        stroke="#006699"
                    /> */}
                    {this.props.linesData.map((lineData,index) =>
                        <Line
                            key={index}
                            type="monotone"
                            dataKey={lineData.dataKey}
                            stroke={lineData.stroke}
                        />
                    )}
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default RechartLine
