import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function FeedAddToYourFeed() {
  return (
    <div className="feed-right-container mb-3 pt-3 pb-2">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="mb-0 ml-3">Add to your feed</p>
        <div className="infoicon-container d-flex justify-content-center align-items-center mr-3">
          <i className="d-flex align-items-center justify-content-center fas fa-info"></i>
        </div>
      </div>
      <Link className="profile-link mb-2" to="/">
        <div className="news-post d-flex align-items-center px-3">
          <div
            className="mr-2"
            style={{ height: 48, width: 48, backgroundColor: "rgb(112, 181, 249)", borderRadius: 24, opacity: 0.7 }}
          ></div>
          <div className="d-flex flex-column align-items-start w-50 mr-4">
            <p className="font-weight-bold mb-0">Tej Lalvani</p>
            <div style={{ width: "90%" }}>
              <p className="d-block grey-text mb-0">CEO of Vitaviotics & Dragon on BBC's Dragon...</p>
            </div>
          </div>

          <div style={{ height: 29 }}>
            <Button className="d-flex align-items-center py-1 rounded-pill font-weight-bold" variant="outline-primary">
              <small className="px-1 mb-0">
                <i className="fas fa-plus mr-2"></i> Follow
              </small>
            </Button>
          </div>
        </div>
      </Link>
      <Link className="profile-link mb-2" to="/">
        <div className="news-post d-flex align-items-center px-3">
          <div
            className="mr-2"
            style={{ height: 48, width: 48, backgroundColor: "rgb(169, 249, 112)", borderRadius: 24, opacity: 0.7 }}
          ></div>
          <div className="d-flex flex-column align-items-start w-50 mr-4">
            <p className="font-weight-bold mb-0">National Crime Agency</p>
            <div style={{ width: "90%" }}>
              <p className="d-block grey-text mb-0">Company - Law</p>
            </div>
          </div>

          <div style={{ height: 29 }}>
            <Button className="d-flex align-items-center py-1 rounded-pill font-weight-bold" variant="outline-primary">
              <small className="px-1 mb-0">
                <i className="fas fa-plus mr-2"></i> Follow
              </small>
            </Button>
          </div>
        </div>
      </Link>
      <Link className="profile-link mb-2" to="/">
        <div className="news-post d-flex align-items-center px-3">
          <div
            className="mr-2"
            style={{ height: 48, width: 48, backgroundColor: "rgb(249, 215, 112)", borderRadius: 24, opacity: 0.7 }}
          ></div>
          <div className="d-flex flex-column align-items-start w-50 mr-4">
            <p className="font-weight-bold mb-0">Anthony J James</p>
            <div style={{ width: "90%" }}>
              <p className="d-block grey-text mb-0">CEO Innovation & Growth at Trinity Consulting</p>
            </div>
          </div>

          <div style={{ height: 29 }}>
            <Button className="d-flex align-items-center py-1 rounded-pill font-weight-bold" variant="outline-primary">
              <small className="px-1 mb-0">
                <i className="fas fa-plus mr-2"></i> Follow
              </small>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeedAddToYourFeed;
