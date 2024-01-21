import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowLeft = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={13}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#86D2CD"
            d="M12.19 0c.205 0 .415.074.573.217a.692.692 0 0 1 0 1.043L1.959 11.075l10.646 9.667a.692.692 0 0 1 0 1.043.873.873 0 0 1-1.148 0L.237 11.596a.692.692 0 0 1 0-1.042L11.615.217A.862.862 0 0 1 12.189 0Z"
        />
    </Svg>
)
export default ArrowLeft
