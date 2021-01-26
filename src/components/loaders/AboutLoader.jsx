import React from "react";
import ContentLoader from "react-content-loader";

const MyAboutLoader = (props) => (
  <ContentLoader
    speed={1.2}
    width={870}
    height={98}
    viewBox="0 0 870 98"
    backgroundColor="#e3e3e3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <rect x="0" y="10" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="30" rx="3" ry="3" width="238" height="6" />
    <rect x="0" y="50" rx="3" ry="3" width="298" height="6" />
    <rect x="0" y="70" rx="3" ry="3" width="248" height="6" />
    <rect x="0" y="90" rx="3" ry="3" width="272" height="6" />
  </ContentLoader>
);

export default MyAboutLoader;
