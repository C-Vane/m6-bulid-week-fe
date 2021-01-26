import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Interests extends Component {
  render() {
    return (
      <div>
        <div id="interests-main-container" className="interests-contain mb-3">
          <div className="py-3 px-4">
            <h4 className="font-weight-normal mb-3">Interests</h4>
            <Row className="mb-4">
              <Col className="d-flex align-items-center">
                <div className="imgPlace mr-3"></div>
                <div>
                  <p className="mb-0 font-weight-bold">Mobile Phone Developer Jobs</p>
                  <p className="mb-0 font-weight-light">5,000 members</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <div className="imgPlace mr-3"></div>
                <div>
                  <p className="mb-0 font-weight-bold">Ios App Developer WorldWide</p>
                  <p className="mb-0 font-weight-light">6,000 members</p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="d-flex align-items-center">
                <div className="imgPlace mr-3"></div>
                <div>
                  <p className="mb-0 font-weight-bold">Microsoft</p>
                  <p className="mb-0 font-weight-light">3,000 members</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <div className="imgPlace mr-3"></div>
                <div>
                  <p className="mb-0 font-weight-bold">Islamic Banking and Finance</p>
                  <p className="mb-0 font-weight-light">4,000 members</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center">
                <div className="imgPlace mr-3"></div>
                <div>
                  <p className="mb-0 font-weight-bold">Atos</p>
                  <p className="mb-0 font-weight-light">2,000 members</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <div className="imgPlace mr-3"></div>
                <div>
                  <p className="mb-0 font-weight-bold">Aditef</p>
                  <p className="mb-0 font-weight-light">4,000 members</p>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="mt-2">
            <Col xs={12} className="text-center">
              <div className="see-all-btn py-2 font-weight-bold text-center brdr-top" style={{ cursor: "pointer" }}>
                See All
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
