import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

class AddModal extends React.Component {
  state = {
    show: false,
    experience: {
      role: "",
      company: "",
      area: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };

  handelChange = (e) => {
    let experience = { ...this.state.experience };
    let currentId = e.currentTarget.id;
    experience[currentId] = e.currentTarget.value;
    this.setState({ experience });
  };
  handelSave = (event) => {
    event.preventDefault();
    this.props.addExperiencePost(this.state.experience);
  };
  componentDidMount = () => {
    this.setState({ show: this.props.show });
  };
  componentDidUpdate = (prevProps) => {
    this.props.show !== prevProps.show && this.setState({ show: this.props.show });
  };

  render() {
    return (
      <Modal show={this.state.show} id="addModal" onHide={() => this.props.addModalToggleHandler()}>
        <Form onSubmit={this.handelSave}>
          <Modal.Header closeButton onClick={() => this.props.addModalToggleHandler()}>
            <Modal.Title>Add Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                id="role"
                placeholder="Ex. Retail Sales Manager"
                value={this.state.experience.role}
                onChange={this.handelChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Employment type</Form.Label>
              <Form.Control as="select">
                <option>-</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
              </Form.Control>
            </Form.Group>
            <a>Learn more</a>
            <Form.Group>
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Microsoft"
                id="company"
                value={this.state.experience.company}
                onChange={this.handelChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                id="area"
                placeholder="Ex: London, United Kingdom"
                value={this.state.experience.area}
                onChange={this.handelChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="I am currently working in this role" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                id="startDate"
                value={this.state.experience.startDate}
                onChange={this.handelChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date*</Form.Label>
              <Form.Control
                type="date"
                id="endDate"
                value={this.state.experience.endDate}
                onChange={this.handelChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Update my industry" />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Update my headline" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                value={this.state.experience.description}
                onChange={this.handelChange}
                required
              />
            </Form.Group>
            <small>Media</small>
            <small>Add or link to external documents, photos, sites, videos, and presentations.</small>
            <Row className=" justify-content-around">
              <Col>
                <Button variant="primary" className="w-100 rounded-pill">
                  Upload
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="w-100 rounded-pill">
                  Link
                </Button>
              </Col>
            </Row>
            <a>Supported formats</a>
          </Modal.Body>

          <Modal.Footer>
            <Row className="share">
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="If enabled, your network may be informed of job changes, education changes, and work anniversaries. Learn how these are shared and when"
                />
              </Form.Group>
            </Row>
            <Button variant="primary" className="rounded-pill" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default AddModal;
