import React from "react";
import ContentLoader from "react-content-loader";

const ExpEducationLoaders = (props) => (
  <ContentLoader
    speed={2}
    width={592}
    height={130}
    viewBox="0 0 592 130"
    backgroundColor="#e3e3e3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <rect x="110" y="35" rx="3" ry="3" width="110" height="10" />
    <rect x="110" y="74" rx="3" ry="3" width="300" height="6" />
    <rect x="110" y="94" rx="3" ry="3" width="178" height="6" />
    <circle cx="58" cy="58" r="28" />
    <rect x="110" y="55" rx="0" ry="0" width="200" height="6" />
  </ContentLoader>
);

export default ExpEducationLoaders;
