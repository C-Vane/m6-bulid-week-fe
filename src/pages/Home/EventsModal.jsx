import React from "react";
import { Button, Col, Form, Modal, Row, Image } from "react-bootstrap";

class EventsModal extends React.Component {
    state = {
        show: false,
        background: null,
        image: null,
        eventPost: {
            backgroundImage: [],
            mainImage: [],
            role: "",
            company: "",
            area: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    };

    handelChange = (e) => {
        let eventPost = { ...this.state.eventPost };
        let currentId = e.currentTarget.id;
        eventPost[currentId] = e.currentTarget.value;
        this.setState({ eventPost });
    };
    handelSave = () => {
        this.props.sendPosts(this.state.eventPost, this.props.EventName);
    };
    componentDidMount = () => {
        this.setState({ show: this.props.show });
    };
    componentDidUpdate = (prevProps) => {
        this.props.show !== prevProps.show && this.setState({ show: this.props.show });
    };
    handelImage = (e) => {
        let id = e.currentTarget.id;
        let prevState = { ...this.state }
        prevState.eventPost[id + "Image"] = e.target.files[0]
        prevState[id] = URL.createObjectURL(e.target.files[0]);
        this.setState(prevState);
    }
    render() {
        return (
            <Modal show={this.props.show} id="postEvent" onHide={() => this.props.onHide(this.props.title)}>
                <Modal.Header closeButton onClick={() => this.props.onHide(this.props.title)}>
                    <Modal.Title>Create event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label className="upload">Upload
                            <input
                                className="position-relative"
                                id="background"
                                name="input"
                                onChange={this.handelImage}
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                            />
                        </label>

                        <Row >
                            {this.state.background !== null ? <Image src={this.state.background} fluid /> : <Image src="https://place-hold.it/400x200?text=" fluid />}
                        </Row>
                    </div>
                    <div className="small-image ml-4" style={{ height: "100px", width: "100px" }} >
                        <label className="upload">Upload
                            <input
                                className="position-relative"
                                id="image"
                                name="input"
                                onChange={this.handelImage}
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                            />
                        </label>

                        <Row style={{ height: "100px", width: "100px" }} >
                            {this.state.image !== null ? <Image src={this.state.image} fluid thumbnail /> : <Image src="https://place-hold.it/100x100?text=" fluid rounded thumbnail />}
                        </Row>

                    </div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Event Name*</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                value={this.state.eventPost.name}
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
                                value={this.state.eventPost.area}
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
                                value={this.state.eventPost.startDate}
                                onChange={this.handelChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>End Date*</Form.Label>
                            <Form.Control
                                type="date"
                                id="endDate"
                                value={this.state.eventPost.endDate}
                                onChange={this.handelChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Public event" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Private event" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                id="description"
                                value={this.state.eventPost.description}
                                onChange={this.handelChange}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" className="rounded-pill" onClick={this.handelSave}>
                        Save
                        </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EventsModal;
