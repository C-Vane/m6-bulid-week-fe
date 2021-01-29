import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedMiddle from "./FeedMiddle";
import FeedRight from "./FeedRight";
import StickyBox from "react-sticky-box";
import { Redirect } from "react-router-dom";

function MainFeedContent({ jobTitle, name, userName, userID, profilePicture }) {
  if (localStorage.getItem("token")) {
    return (
      <Container className='pt-5'>
        <Row className='mt-5'>
          <Col xs={3} className='d-none d-sm-inline-block'>
            <StickyBox offsetTop={65} offsetBottom={20}>
              <FeedLeft jobTitle={jobTitle} name={name} userID={userID} userName={userName} profilePicture={profilePicture} />
            </StickyBox>
          </Col>
          <Col xs={5}>
            <FeedMiddle jobTitle={jobTitle} name={name} userID={userID} userName={userName} profilePicture={profilePicture} />
          </Col>
          <Col xs={4} className='d-none d-sm-inline-block'>
            <StickyBox offsetTop={65} offsetBottom={20}>
              <FeedRight />
            </StickyBox>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Redirect to='/' />;
  }
}
export default MainFeedContent;
