import React from "react";
import { Image, Form, Col, Button } from "react-bootstrap";
import Moment from "react-moment";

class Comments extends React.Component {
  state = {
    comments: [],
    loaded: false,
    addComment: "",
  };
  url = "https://striveschool-api.herokuapp.com/api/comments/";
  handleChange = (e) => {
    let { addComment } = this.state;
    addComment = e.currentTarget.value;
    this.setState({ addComment });
  };
  postComments = async (e) => {
    e.preventDefault();
    let commentReaction = {
      elementId: this.props.postId,
      rate: 1,
      comment: this.state.addComment,
    };
    try {
      let response = await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(commentReaction),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        this.props.getComments();
        this.setState({ addComment: "" })
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    let { profilePicture, comments } = this.props;
    const { addComment } = this.state;
    return (
      <div className="mt-2 pt-2">
        <Col>
          <div className="row">
            <Col sm={1} className="d-sm-none d-md-inline mr-2">
              <Image src={profilePicture} style={{ width: "40px", height: "40px" }} roundedCircle />
            </Col>
            <Col sm={10} className="p-0">
              <Form onSubmit={this.postComments}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="rounded-pill w-100 ml-3 p-3"
                    id={addComment}
                    value={addComment}
                    onChange={this.handleChange}
                    placeholder="Add a comment..."
                  />
                </Form.Group>
              </Form>
            </Col>
          </div>
          <div>
            {comments.length > 0 &&
              comments.map((comment, index) => (
                <div className="mb-3">
                  <div key={index} className="comments w-100 d-flex">
                    <Col className="m-0 p-2 pl-3">
                      <div className="m-0 p-0 d-flex flex-wrap">
                        <h6 className="m-0 p-0">{comment.author}</h6> ~
                        <small className="text-muted mb-2 font-weight-lighter">
                          {" "}
                          <Moment fromNow>{comment.createdAt}</Moment>{" "}
                        </small>
                      </div>
                      <p className="m-0 p-0">{comment.comment}</p>
                    </Col>
                  </div>
                  <small>
                    {" "}
                    <Button className="m-0 p-0 text-muted" variant="link">
                      Like
                    </Button>{" "}
                    |{" "}
                    <Button className="m-0 p-0 text-muted" variant="link">
                      Reply
                    </Button>
                  </small>
                </div>
              ))}
          </div>
        </Col>
      </div>
    );
  }
}

export default Comments;
