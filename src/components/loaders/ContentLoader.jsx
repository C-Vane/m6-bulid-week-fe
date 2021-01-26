import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1.2}
    width={870}
    height={168}
    viewBox="0 0 870 168"
    backgroundColor="#e3e3e3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <circle cx="40" cy="40" r="40" />
    <rect x="460" y="8" rx="3" ry="3" width="120" height="36" />
    <rect x="600" y="8" rx="3" ry="3" width="120" height="36" />
    <rect x="740" y="8" rx="3" ry="3" width="120" height="36" />
    <rect x="650" y="86" rx="3" ry="3" width="140" height="8" />
    <rect x="650" y="106" rx="3" ry="3" width="180" height="6" />
    <rect x="4" y="100" rx="3" ry="3" width="410" height="16" />
    <rect x="4" y="132" rx="3" ry="3" width="238" height="12" />
    <rect x="4" y="160" rx="3" ry="3" width="298" height="8" />
  </ContentLoader>
);

export default MyLoader;
