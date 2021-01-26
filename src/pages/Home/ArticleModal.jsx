import React from "react";
import { Button, Col, Modal, Image, Row } from "react-bootstrap";

class ArticleModal extends React.Component {
  state = {
    file: [],
    input: [],
  };
  handleChange = (e) => {
    let input = this.state.input;
    input.push(URL.createObjectURL(e.target.files[0]));
    let file = this.state.file;
    file.push(e.target.files[0]);
    this.setState({ input, file });
  };
  handelSave = () => {
    this.props.sendPosts(this.state.file, this.props.title);
  };
  render() {
    return (
      <div>
        <Modal show={this.props.show} id="uploadModal" onHide={() => this.props.onHide(this.props.title)}>
          <Modal.Header closeButton onClick={() => this.props.onHide(this.props.title)}>
            <Modal.Title>Edit your {this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row md={3}>
              {this.state.input.length !== 0 &&
                this.state.input.map((input, key) => (
                  <Col key={key}>
                    {" "}
                    {this.props.title === "photo" ? (
                      <Image src={input} fluid />
                    ) : (
                      <video className="w-100">
                        <source src={input} id="video_here" />
                        Your browser does not support HTML5 video.
                      </video>
                    )}
                  </Col>
                ))}
            </Row>
            <Row className="justify-content-center align-items-center">
              <label className="upload" for="input">
                Select {this.props.title} to share
                <input
                  className="position-relative"
                  id="input"
                  name="input"
                  onChange={this.handleChange}
                  type="file"
                  accept={this.props.title === "photo" ? "image/x-png,image/gif,image/jpeg" : "video/*"}
                />
              </label>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Col>
              <Button
                variant="outline-primary"
                className="rounded-pill w-100"
                onClick={() => this.props.deleteExperience(this.props.experience._id)}
              >
                Cancel{" "}
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="rounded-pill w-100"
                disabled={this.state.input.length !== 0 ? false : true}
                onClick={this.handelSave}
              >
                Done
              </Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ArticleModal;
