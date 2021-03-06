import React, { Component } from 'react'

class ThumbsChart extends Component {

    render() {
        const percent = this.props.data.value * 100;
        const cutoff = this.props.data.cutoff * 100;
        const gradientId = `thumbsFill${percent}`;
        const pathFill = `url(#thumbsFill${percent})`;
        let offset1, offset2, offset3, offset4, offset1Color, offset2Color, offset3Color, offset4Color, animateFrom, animateTo, strokeColor, style;
        if (percent <= cutoff) {
            offset1 = 0;
            offset2 = 0;
            offset3 = 0;
            offset4 = 0;
            offset1Color = "#FF8042";
            offset2Color = "#FF8042";
            offset3Color = "#fff";
            offset4Color = "#fff";
            animateFrom = 0;
            animateTo = (percent + 10) / 100;
            strokeColor = "#FF8042";
            style = {
                transform: `rotateX(${180}deg)` // thumbs down
            }
        } else {
            offset1 = 0;
            offset2 = 100 - percent;
            offset3 = offset2 + 1;
            offset4 = 100;
            offset1Color = "#fff";
            offset2Color = "#fff";
            offset3Color = "#00C49F";
            offset4Color = "#00C49F";
            animateFrom = 1;
            animateTo = offset2 / 100;
            strokeColor = "#00C49F";
            style = {
                transform: "" // thumbs up
            }
        }

        return (
                <svg
                    height="auto"
                    viewBox="0 0 1792 1792"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg"
                    style={style}
                >
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset={offset1} stopColor={offset1Color} stopOpacity={1}>
                                <animate dur="1s" attributeName="offset" fill="freeze" from={animateFrom} to={animateTo} />
                            </stop>
                            <stop offset={offset2} stopColor={offset2Color} stopOpacity={1}>
                                <animate dur="1s" attributeName="offset" fill="freeze" from={animateFrom} to={animateTo} />
                                {/* <animate dur="1s" attributeName="offset" fill="freeze" from="1" to="0.65"/> */}
                            </stop>
                            <stop offset={offset3} stopColor={offset3Color} stopOpacity={1}>
                                <animate dur="1s" attributeName="offset" fill="freeze" from={animateFrom} to={animateTo} />
                                {/* <animate dur="1s" attributeName="offset" fill="freeze" from="1" to="0.65"/> */}
                            </stop>
                            <stop offset={offset4} stopColor={offset4Color} stopOpacity={1}>
                                <animate dur="1s" attributeName="offset" fill="freeze" from={animateFrom} to={animateTo} />
                                {/* <animate dur="1s" attributeName="offset" fill="freeze" from="1" to="0.65"/> */}
                            </stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill={pathFill}
                        stroke={strokeColor}
                        strokeWidth="20"
                        d="M320 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zm160-512v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zm1184 0q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-129q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 .5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z"
                    />
            </svg>
        )
    }
}

export default ThumbsChart
