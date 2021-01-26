import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
export default class Skills extends Component {
  render() {
    return (
      <div>
        <div id="skills-main-container" className="skills-contain mb-3">
          <div className="py-3 px-4">
            <h4 className="font-weight-normal">Skills & endorsments</h4>
            <ListGroup>
              <ListGroup.Item variant="light" className="brdr-bottom">
                <h6>Skill 1</h6>
                <div className="d-flex align-items-center">
                  <div className="skills-img-placeholder mr-3"></div>
                  <small className="mb-0">
                    Endorsed by <span className="font-weight-bold">Name, who is highly skilled at this.</span>
                  </small>
                </div>
              </ListGroup.Item>
              <ListGroup.Item variant="light" className="brdr-bottom">
                <h6>Skill 2</h6>
                <div className="d-flex align-items-center">
                  <small className="mb-0">
                    <span className="font-weight-bold">Name and x connections</span> have given endorsements for this
                    skill.
                  </small>
                </div>
              </ListGroup.Item>
              <ListGroup.Item variant="light" className="brdr-bottom">
                <h6>Skill 3</h6>
                <div className="d-flex align-items-center">
                  <small className="mb-0">
                    <span className="font-weight-bold">Name and x connections</span> have given endorsements for this
                    skill.
                  </small>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="see-all-btn py-2 font-weight-bold text-center brdr-top" style={{ cursor: "pointer" }}>
            Show more
          </div>
        </div>
      </div>
    );
  }
}
