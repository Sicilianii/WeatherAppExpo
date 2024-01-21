import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
const ArrowSVG = (props) => (
    <Svg width="50" height="50"
        xmlns="http://www.w3.org/2000/svg"
        data-name="\u0421\u043B\u043E\u0439 2"
        viewBox="0 0 120 120"
        {...props}
    >
        <G data-name="\u0421\u043B\u043E\u0439 1">
            <Circle
                cx={60}
                cy={60}
                r={60}
                style={{
                    strokeWidth: 0,
                    fill: "#0095ff",
                }}
            />
            <Path
                d="M64.17 85c-1.07 0-2.13-.41-2.95-1.22a4.158 4.158 0 0 1 0-5.89l13.72-13.72H35c-2.3 0-4.17-1.87-4.17-4.17s1.87-4.17 4.17-4.17h39.94L61.22 42.11a4.158 4.158 0 0 1 0-5.89 4.158 4.158 0 0 1 5.89 0l20.83 20.83c.43.43.75.94.95 1.48.14.37.23.76.26 1.17 0 .1.01.19.01.29s0 .19-.01.29a4.21 4.21 0 0 1-1.21 2.65L67.11 83.76c-.81.81-1.88 1.22-2.95 1.22Z"
                style={{
                    fill: "#f9f9f9",
                    strokeWidth: 0,
                }}
            />
        </G>
    </Svg>
)
export default ArrowSVG;