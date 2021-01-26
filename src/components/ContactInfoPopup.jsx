import React from "react";

function ContactInfoPopup({ contactInfoHandler }) {
  return (
    <>
      <div
        id="contact-info-popup"
        className="fade-in d-flex justify-content-center align-items-start"
        onClick={contactInfoHandler}
      ></div>
      <div className="d-flex justify-content-center w-100">
        <div className="popup-wrapper">
          <div className="contact-popup-title d-flex justify-content-between align-items-center">
            <h3 className=" font-weight-normal">Aaron Rizhik</h3>
            <i className="fas fa-times" onClick={contactInfoHandler}></i>
          </div>
          <div className="contact-info-wrapper px-4 pt-4">
            <h4 className="font-weight-normal mb-4">Contact Info</h4>
            <div className="d-flex align-items-start mb-4">
              <i className="fab fa-linkedin mr-3"></i>
              <div>
                <h6 className="mb-0">Aaron's Profile</h6>
                <a href="#!">linkedin.com/in/aaronrizhik</a>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <i className="fas fa-link mr-3"></i>
              <div>
                <h6 className="mb-0">Website</h6>
                <a href="#!">testwebsite.com</a>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <i className="fab fa-twitter mr-3"></i>
              <div>
                <h6 className="mb-0">Twitter</h6>
                <a href="#!">arzhk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfoPopup;
