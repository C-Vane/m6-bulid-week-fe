import React from "react"
import ContentLoader from "react-content-loader"

const PeopleLoaders = (props) => (
    <ContentLoader
        speed={2}
        width={294}
        height={105}
        viewBox="0 0 294 105"
        backgroundColor="#e3e3e3"
        foregroundColor="#d1d1d1"
        {...props}
    >
        <rect x="86" y="178" rx="3" ry="3" width="110" height="10" />
        <circle cx="58" cy="157" r="28" />
        <circle cx="348" cy="48" r="18" />
        <circle cx="35" cy="53" r="28" />
        <rect x="81" y="25" rx="0" ry="0" width="122" height="14" />
        <rect x="138" y="36" rx="0" ry="0" width="26" height="1" />
        <rect x="82" y="83" rx="3" ry="3" width="90" height="6" />
        <rect x="221" y="50" rx="0" ry="0" width="50" height="6" />
        <rect x="81" y="50" rx="0" ry="0" width="130" height="6" />
        <rect x="82" y="66" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
)

export default PeopleLoaders

