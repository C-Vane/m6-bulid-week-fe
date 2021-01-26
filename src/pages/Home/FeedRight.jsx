import React from "react";
import FeedAddToYourFeed from "../../components/FeedAddToYourFeed";
import FeedMostViewedCourses from "../../components/FeedMostViewedCourses";
import FeedNews from "../../components/FeedNews";
import FeedRightFooter from "../../components/FeedRightFooter";

function FeedRight() {
  return (
    <>
      <FeedNews />
      <FeedMostViewedCourses />
      <FeedAddToYourFeed />
      <FeedRightFooter />
    </>
  );
}

export default FeedRight;
