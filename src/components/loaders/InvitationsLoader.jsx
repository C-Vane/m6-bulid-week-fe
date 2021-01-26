import React from "react"
import ContentLoader from "react-content-loader"

const InvitationsLoader = (props) => (
  <ContentLoader 
  speed={1.2}
  width={1000}
  height={100}
  viewBox="0 0 1350 140"
  backgroundColor="#e3e3e3"
  foregroundColor="#d1d1d1"
  {...props}
  >
    <rect x="120" y="16" rx="3" ry="3" width="250" height="22" /> 
    <rect x="120" y="48" rx="3" ry="3" width="265" height="15" /> 
    <rect x="120" y="72" rx="3" ry="3" width="290" height="8" /> 
    <circle cx="48" cy="48" r="48 " /> 
    <rect x="1100" y="12" rx="3" ry="3" width="90" height="32" /> 
    <rect x="1000" y="12" rx="3" ry="3" width="90" height="32" />
  </ContentLoader>
)

export default InvitationsLoader