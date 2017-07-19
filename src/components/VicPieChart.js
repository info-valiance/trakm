import React, { Component } from 'react';
import { VictoryPie } from 'victory';

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
            <VictoryPie
                data={this.state.data}
                colorScale={['#3D2645', '#832161', '#DA4167']}
                // radius of donut hole
                innerRadius={100}
                // space between multiple arcs
                padAngle={3}
                // animate buggy for VictoryPie till version 0.21.2
                // animate={{ duration: 500, onLoad: {duration: 2000} }}
                // To position the labels from the center
                labelRadius={112}
                style={{ labels: { fill: "#fff" } }}
            />
        )
    }
}

export default VicPieChart
