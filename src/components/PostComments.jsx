import React from "react";
import { Image, Form, Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "./commentItem";
import { deleteFunction, postFunction, putFunction } from "./CRUDFunctions";

class Comments extends React.Component {
  state = {
    comments: [],
    loaded: false,
    addComment: "",
    editComment: "",
    edit: false,
  };

  handleChange = (e) => {
    let { addComment } = this.state;
    addComment = e.currentTarget.value;
    this.setState({ addComment });
  };
  postComments = async (e) => {
    e.preventDefault();
    let commentReaction = {
      post: this.props.postId,
      author: this.props.userID,
      comment: this.state.addComment,
    };
    const response = await postFunction("comments/", commentReaction);
    if (response) {
      this.setState({ addComment: "" });
      this.props.getComments();
    } else {
      console.log(response);
    }
  };
  deleteComments = async (id) => {
    const response = await deleteFunction("comments/" + id);
    if (response) {
      this.props.getComments();
    } else {
      console.log(response);
    }
  };
  editComments = async (e, id, text) => {
    e.preventDefault();
    let commentReaction = {
      comment: text,
    };
    const response = await putFunction("comments/" + id, commentReaction);
    if (response) {
      this.setState({ editComment: "" });
      this.props.getComments();
    } else {
      console.log(response);
    }
  };
  render() {
    let { profilePicture, comments, userID, next, getComments } = this.props;
    const { addComment } = this.state;
    return (
      <div className='mt-2 pt-2'>
        <Col>
          <div className='row'>
            <Col sm={1} className='d-none d-sm-inline mr-2'>
              <Image src={profilePicture} style={{ width: "40px", height: "40px" }} roundedCircle />
            </Col>
            <Col sm={10} className='p-0'>
              <Form onSubmit={this.postComments}>
                <Form.Group>
                  <Form.Control type='text' className='rounded-pill w-100 ml-3 p-3' id={addComment} value={addComment} onChange={this.handleChange} placeholder='Add a comment...' />
                </Form.Group>
              </Form>
            </Col>
          </div>
          <div style={{ maxHeight: "25vh", overflow: "hidden", overflowY: "scroll" }} ref={(ref) => (this.scrollParentRef = ref)}>
            <InfiniteScroll pageStart={0} getScrollParent={() => this.scrollParentRef} hasMore={next.length > 0} loadMore={() => getComments(next)} useWindow={false} loader={<div>Loading...</div>}>
              {comments.length > 0 &&
                comments.map((comment, index) => <CommentItem key={index} comment={comment} deleteComments={this.deleteComments} editComments={this.editComments} userID={userID} />)}
            </InfiniteScroll>
          </div>
        </Col>
      </div>
    );
  }
}

export default Comments;
