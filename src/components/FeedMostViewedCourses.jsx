import React from "react";
import { Link } from "react-router-dom";

function FeedMostViewedCourses() {
  return (
    <div className="feed-right-container mb-3 pt-3 pb-2">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="mb-0 ml-3">Today's most viewed courses</p>
        <div className="infoicon-container d-flex justify-content-center align-items-center mr-3">
          <i className="d-flex align-items-center justify-content-center fas fa-info"></i>
        </div>
      </div>
      <Link className="profile-link mb-1 d-flex justify-content-between align-items-center" to="/">
        <div className="news-post d-flex flex-column px-3">
          <div className="d-flex align-items-center">
            <p className="font-weight-bold mr-2 mb-0">1.</p>
            <p className="font-weight-bold mb-0">The Six Morning Habits to High Perfor...</p>
          </div>
          <p className="d-block ml-3 grey-text mb-0">Pete Mockaitis | How to Be Awesome at Your J...</p>
        </div>
        <i className="grey-text fas fa-external-link-alt mr-3"></i>
      </Link>
      <Link className="profile-link mb-1 d-flex justify-content-between align-items-center" to="/">
        <div className="news-post d-flex flex-column px-3">
          <div className="d-flex align-items-center">
            <p className="font-weight-bold mr-2 mb-0">2.</p>
            <p className="font-weight-bold mb-0">Time Management for Busy People</p>
          </div>
          <p className="d-block ml-3 grey-text mb-0">Madecraft and Samantha Bennett</p>
        </div>
        <i className="grey-text fas fa-external-link-alt mr-3"></i>
      </Link>
      <Link className="profile-link mb-1 d-flex justify-content-between align-items-center" to="/">
        <div className="news-post d-flex flex-column px-3">
          <div className="d-flex align-items-center">
            <p className="font-weight-bold mr-2 mb-0">3.</p>
            <p className="font-weight-bold mb-0">Unconscious Bias</p>
          </div>
          <p className="d-block ml-3  grey-text mb-0">Stacey Gordon</p>
        </div>
        <i className="grey-text fas fa-external-link-alt mr-3"></i>
      </Link>
      <Link to="/">
        <p className="ml-3 pl-1 blue-text mb-0">Show more on LinkedIn Learning</p>
      </Link>
    </div>
  );
}

export default FeedMostViewedCourses;
