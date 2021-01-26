import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props) => (
    <ContentLoader
        speed={1}
        width={368}
        height={400}
        viewBox="0 0 368 400"
        backgroundColor="#e3e3e3"
        foregroundColor="#d1d1d1"
        {...props}
    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="49" y="21" rx="3" ry="3" width="56" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
        <rect x="-10" y="110" rx="0" ry="0" width="401" height="143" />
        <rect x="2" y="273" rx="0" ry="0" width="366" height="2" />
        <rect x="335" y="3" rx="0" ry="0" width="29" height="6" />
        <rect x="50" y="31" rx="3" ry="3" width="70" height="6" />
    </ContentLoader>
)

export default PostLoader

