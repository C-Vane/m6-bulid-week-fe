import React from "react";

function Highlights() {
  return (
    <div id="highlights-container" className="w-100 my-3">
      <h4 className="font-weight-normal mb-4">Highlights</h4>
      <div className="highlight-container d-flex justify-content-start align-items-center">
        <div className="highlight-image d-flex justify-content-center align-items-end mr-3">
          <i className="fas fa-user"></i>
        </div>
        <div className="highlight-content-container">
          <h5 className="mb-1">1 mutual connection</h5>
          <p className="mb-0">You and blabla both know blablabla</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
