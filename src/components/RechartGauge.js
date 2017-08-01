import React from 'react';
import { Sector, Cell, PieChart, Pie, ResponsiveContainer } from 'recharts';

const RechartGauge = (props) => {
        const width = 300;
        const chartValue = props.psi.value;  // the value that will be shown on chart
        const colorData = [{
                name: "0 - 0.1",
                value: 0.1, // span is 0 to 0.1
                color: '#00C49F'
            }, {
                name: "0.1 - 0.25",
                value: 0.15, // span 0.1 to 0.25
                color: '#FFBB28'
            }, {
                name: "0.25 & above",
                value: 0.15, // span 0.25 or greater
                color: '#FF8042'
            }
        ];

        const activeSectorIndex = colorData.map((cur, index, arr) => {
            const curMax = [...arr]
                .splice(0, index + 1)
                .reduce((a, b) => ({ value: a.value + b.value }))
                .value;
            return (chartValue > (curMax - cur.value)) && (chartValue <= curMax);
        })
        .findIndex(cur => cur);

        const sumValues = colorData
            .map(cur => cur.value)
            .reduce((a, b) => a + b);

        const arrowData = [
            { value: chartValue },
            { value: 0 },
            { value: sumValues - chartValue }
        ];

        const pieProps = {
            dataKey: "value",
            startAngle: 180,
            endAngle: 0,
            // cx: width / 2,
            // cy: width / 2
            cx: "50%",
            cy: "90%",
            label: (data) => {
                return (
                    data.name
                )
            }
        };

        const pieRadius = {
            innerRadius: (width / 2) * 0.85,
            outerRadius: (width / 2) * 1.0
        };

        const Arrow = ({ cx, cy, midAngle, outerRadius }) => { //eslint-disable-line react/no-multi-comp
            const RADIAN = Math.PI / 180;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const mx = cx + (outerRadius + width * 0.03) * cos;
            const my = cy + (outerRadius + width * 0.03) * sin;
            return (
                <g>
                    <circle cx={cx} cy={cy} r={width * 0.02} fill="#666" stroke="#666" strokeWidth="3"/>
                    <path d={`M${cx},${cy}L${mx},${my}`} strokeWidth="4" stroke="#666" fill="none" strokeLinecap="round"/>
                </g>
            );
        };

        const ActiveSectorMark = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill }) => { //eslint-disable-line react/no-multi-comp
            return (
                <g>
                    <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius * 1.13}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                    />
                </g>
            );
        };

        return (
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        activeIndex={activeSectorIndex}
                        activeShape={ActiveSectorMark}
                        data={colorData}
                        fill="#8884d8"
                        { ...pieRadius }
                        { ...pieProps }
                    >
                        {
                            colorData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorData[index].color} />
                            ))
                        }
                    </Pie>
                    <Pie
                        stroke="none"
                        activeIndex={1}
                        activeShape={ Arrow }
                        data={ arrowData }
                        outerRadius={ pieRadius.innerRadius }
                        fill="none"
                        { ...pieProps }
                    />
                </PieChart>
            </ResponsiveContainer>
        );
};

export default RechartGauge;
