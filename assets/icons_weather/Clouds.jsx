import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Clouds = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        id="_\u0421\u043B\u043E\u0439_2"
        data-name="\u0421\u043B\u043E\u0439 2"
        viewBox="0 0 113.28 63.55"
        {...props}
    >
        <Defs></Defs>
        <G id="OBJECTS">
            <Path
                d="M98.87 25.29c-1.58-7.35-8.34-12.88-16.45-12.88-3.96 0-7.6 1.33-10.47 3.54C67.1 6.5 57 0 45.31 0 30.2 0 17.74 10.87 15.87 24.93 6.82 26.89 0 34.7 0 43.99c0 10.76 9.14 19.56 20.31 19.56h72.66c11.17 0 20.31-8.8 20.31-19.55 0-8.79-6.09-16.26-14.41-18.7Z"
                style={{
                    fill: "#86d2cd",
                    strokeWidth: 0,
                }}
            />
            <Path
                d="M26.16 16.36c4.47-6.38 11.29-9.98 19.07-10.18 1.81-.05 1.82-2.87 0-2.82-8.82.22-16.45 4.36-21.51 11.58-1.04 1.49 1.4 2.9 2.44 1.42ZM6.59 45.05c.13-5.3 2.72-9.91 7.19-12.77 1.52-.97.11-3.42-1.42-2.44-5.33 3.41-8.42 8.88-8.58 15.2-.05 1.82 2.77 1.81 2.82 0Z"
                className="cls-1"
            />
        </G>
    </Svg>
)
export default Clouds;