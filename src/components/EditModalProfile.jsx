import React from "react";
import moment from "moment";
import { Button, Col, Form, Modal, ModalFooter, Row } from "react-bootstrap";

class EditProfile extends React.Component {
  state = {
    profile: {},
  };
  componentDidMount = () => {
    this.setState({ profile: this.props.profile, show: this.props.show });
  };
  handelChange = (e) => {
    let profile = { ...this.state.profile };
    let currentId = e.currentTarget.id;
    profile[currentId] = e.currentTarget.value;
    this.setState({ profile });
  };
  handelSave = (event) => {
    event.preventDefault();
    this.props.editprofilePut(this.state.profile);
  };
  componentDidUpdate = (prevProps) => {
    this.props.show !== prevProps.show && this.setState({ show: this.props.show });
  };

  render() {
    return (
      <Modal show={this.props.show} id='editModal' onHide={() => this.props.editModalToggleHandler()}>
        <Form onSubmit={this.handelSave}>
          <Modal.Header closeButton onClick={() => this.props.editModalToggleHandler()}>
            <Modal.Title>Edit profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name*</Form.Label>
              <Form.Control type='text' id='name' value={this.state.profile.name} onChange={this.handelChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Surname*</Form.Label>
              <Form.Control type='text' id='surname' value={this.state.profile.surname} onChange={this.handelChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' id='title' value={this.state.profile.title} onChange={this.handelChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email*</Form.Label>
              <Form.Control type='email' id='email' value={this.state.profile.email} onChange={this.handelChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>About</Form.Label>
              <Form.Control as='textarea' type='text' row='3' id='bio' value={this.state.profile.bio} onChange={this.handelChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col>
              <Button variant='outline-secondary' className='rounded-pill w-100' onClick={() => this.props.deleteprofile(this.props.profile._id)}>
                Delete{" "}
              </Button>
            </Col>
            <Col>
              <Button variant='primary' className='rounded-pill w-100' type='submit'>
                Save
              </Button>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default EditProfile;
