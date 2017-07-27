import React, { Component } from 'react'

class CharacterCard extends Component {
    render() {
        let charBackground;
        const score = parseFloat(this.props.score)
        if(score <= -4) {
            charBackground = "#006699";
        } else if(score > -4 && score <= -1) {
            charBackground = "#00aaff";
        } else if(score > -1 && score <= 1) {
            charBackground = "#66ccff";
        } else if(score > 1 && score <= 4) {
            charBackground = "#00aaff";
        } else if(score > 4) {
            charBackground = "#006699";
        }

        return (
            <div className="flex-items">
                <div
                    className="flex-box char-analysis-scorecard"
                    style={{
                        // background: charBackground,
                        boxShadow: `0 0 11px ${charBackground}`,
                        background: `linear-gradient(135deg, ${charBackground} 0%,rgba(255,255,255,1) 80%`
                    }}
                >

                    <div
                        className="flex-items scorecard-top"
                        style={{
                            fontSize: "13px"
                        }}
                    >
                        {this.props.name}
                    </div>
                    <div
                        className="flex-items scorecard-mid"
                        style={{
                            fontSize: "16px"
                        }}
                    >
                        Score
                    </div>
                    <div
                        className="flex-items scorecard-bottom"
                        style={{
                            fontSize: "18px"
                        }}
                    >
                        {this.props.score}
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterCard
