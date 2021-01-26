import React from "react";
import moment from "moment";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

class EditModal extends React.Component {
  state = {
    experience: {
      role: "",
      company: "",
      area: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };
  componentDidMount = () => {
    this.setState({ experience: this.props.experience, show: this.props.show });
  };
  handelChange = (e) => {
    let experience = { ...this.state.experience };
    let currentId = e.currentTarget.id;
    experience[currentId] = e.currentTarget.value;
    this.setState({ experience });
  };
  handelSave = (event) => {
    event.preventDefault();
    this.props.editExperiencePut(this.state.experience);
  };
  componentDidUpdate = (prevProps) => {
    this.props.show !== prevProps.show && this.setState({ show: this.props.show });
  };

  render() {
    return (
      <Modal show={this.props.show} id="editModal" onHide={() => this.props.editModalToggleHandler()}>
        <Form onSubmit={this.handelSave}>
          <Modal.Header closeButton onClick={() => this.props.editModalToggleHandler()}>
            <Modal.Title>Edit Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title*</Form.Label>
              <Form.Control type="text" id="role" value={this.state.experience.role} onChange={this.handelChange} />
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
            <Button variant="link">Learn more</Button>
            <Form.Group>
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                id="company"
                value={this.state.experience.company}
                onChange={this.handelChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" id="area" value={this.state.experience.area} onChange={this.handelChange} />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="I am currently working in this role" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                id="startDate"
                value={moment(this.state.experience.startDate).format("YYYY-MM-DD")}
                onChange={this.handelChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Endart Date*</Form.Label>
              <Form.Control
                type="date"
                id="endDate"
                value={moment(this.state.experience.endDate).format("YYYY-MM-DD")}
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
                id="description"
                rows={3}
                value={this.state.experience.description}
                onChange={this.handelChange}
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
            <Button variant="link">Supported formats</Button>
          </Modal.Body>
          <Modal.Footer>
            <Row className="share">
              <Form.Group controlId="shareWithNetwork">
                <Form.Check
                  type="checkbox"
                  label="If enabled, your network may be informed of job changes, education changes, and work anniversaries. Learn how these are shared and when"
                />
              </Form.Group>
            </Row>
            <Col>
              <Button
                variant="outline-secondary"
                className="rounded-pill w-100"
                onClick={() => this.props.deleteExperience(this.props.experience._id)}
              >
                Delete{" "}
              </Button>
            </Col>
            <Col>
              <Button variant="primary" className="rounded-pill w-100" type="submit">
                Save
              </Button>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default EditModal;
