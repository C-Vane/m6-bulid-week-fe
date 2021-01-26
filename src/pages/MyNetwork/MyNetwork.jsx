import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Invitations from "./Invitations";
import ManageMyNetwork from "./ManageMyNetwork";
import OnlineEvents from "./OnlineEvents";
import StickyBox from "react-sticky-box";

export default class MyConnections extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className='mt-5'>
          <Col xs={4}>
            <StickyBox offsetTop={65} offsetBottom={20}>
              <ManageMyNetwork />
            </StickyBox>
          </Col>
          <Col xs={8} className=' flex-column'>
            <Invitations />
            <OnlineEvents />
          </Col>
        </Row>
      </Container>
    );
  }
}
