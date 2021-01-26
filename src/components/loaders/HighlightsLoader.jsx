import React from "react"
import ContentLoader from "react-content-loader"

const HighlightsLoader = (props) => (
    <ContentLoader
        speed={2}
        width={623}
        height={166}
        viewBox="0 0 623 166"
        backgroundColor="#e3e3e3"
        foregroundColor="#d1d1d1"
        {...props}
    >
        <rect x="5" y="22" rx="3" ry="3" width="178" height="23" />
        <rect x="295" y="98" rx="3" ry="3" width="52" height="6" />
        <rect x="97" y="62" rx="3" ry="3" width="279" height="10" />
        <rect x="98" y="84" rx="3" ry="3" width="380" height="6" />
        <rect x="101" y="99" rx="3" ry="3" width="178" height="6" />
        <circle cx="48" cy="94" r="33" />
        <rect x="367" y="98" rx="0" ry="0" width="86" height="5" />
        <rect x="325" y="99" rx="0" ry="0" width="2" height="4" />
    </ContentLoader>
)

export default HighlightsLoader

