import React, { Component } from 'react';
import { VictoryPie, VictoryLegend } from 'victory';

class VicPieChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: [
                { x: "Low Performing", y: 40 },
                { x: "Fairly Performing", y: 60 },
                { x: "High Performing", y: 100 }
            ]
        })
    }

    render() {
        return (
            <div>
                <VictoryPie
                    data={this.state.data}
                    colorScale={['#f9705d', 'gold', '#63f763']}
                    // radius of donut hole
                    innerRadius={100}
                    // space between multiple arcs
                    padAngle={3}
                    // animate buggy for VictoryPie till version 0.21.2
                    // animate={{ duration: 500, onLoad: {duration: 2000} }}
                    // To position the labels from the center
                    labelRadius={112}
                    // labels text
                    labels={(data) => `${data.y}`}
                    style={{
                        labels: {
                            fill: "#fff" ,
                            fontSize: "18px",
                            fontFamily: "Open Sans",
                            fontWeight: "bold"
                        }
                    }}
                />
                <VictoryLegend
                    data={[
                        { name: "Low Performing", symbol: { type: 'square'} },
                        { name: "Fairly Performing", symbol: { type: 'square'} },
                        { name: "High Performing", symbol: { type: 'square'} }
                    ]}
                    colorScale={['#f9705d', 'gold', '#63f763']}
                    orientation="horizontal"
                />
            </div>
        )
    }
}

export default VicPieChart
