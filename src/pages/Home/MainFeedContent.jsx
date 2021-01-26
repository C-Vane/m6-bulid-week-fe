import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedMiddle from "./FeedMiddle";
import FeedRight from "./FeedRight";
import StickyBox from "react-sticky-box";

function MainFeedContent({ jobTitle, name, userID, profilePicture }) {
  return (
    <Container className="pt-5">
      <Row className="mt-5">
        <Col xs={3}>
          <StickyBox offsetTop={65} offsetBottom={20}>
            <FeedLeft jobTitle={jobTitle} name={name} userID={userID} profilePicture={profilePicture} />
          </StickyBox>
        </Col>
        <Col xs={5}>
          <FeedMiddle jobTitle={jobTitle} name={name} userID={userID} profilePicture={profilePicture} />
        </Col>
        <Col xs={4}>
          <StickyBox offsetTop={65} offsetBottom={20}>
            <FeedRight />
          </StickyBox>
        </Col>
      </Row>
    </Container>
  );
}

export default MainFeedContent;
