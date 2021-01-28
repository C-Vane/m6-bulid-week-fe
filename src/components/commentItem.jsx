import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import Moment from "react-moment";
const CommentItem = ({ comment, deleteComments, editComments, userID }) => {
  const [editComment, seteditComment] = useState("");
  const [edit, setEdit] = useState(false);
  const { name, surname, username, image, _id, title } = comment.author;
  return (
    <Row className='mb-3'>
      <Col className='col-2 col-sm-1'>
        <Image src={image} style={{ width: "35px", height: "35px" }} className='mr-2' roundedCircle />
      </Col>
      <Col className='col-9 col-sm-11'>
        <div className='comments w-100 d-flex'>
          <Col className='m-0'>
            <div className='m-0 p-0 d-flex flex-wrap'>
              <div className='row'>
                <Link to={"/profile/" + username}>
                  <h6 className='m-0 p-0  text-black-50'>{name + " " + surname}</h6>
                  <small className='text-muted'>{title}</small>
                </Link>{" "}
                <small className='text-muted mb-2 font-weight-lighter d-none d-sm-block'>
                  {" "}
                  <Moment fromNow>{comment.createdAt}</Moment>{" "}
                </small>
              </div>
              {_id === userID && (
                <Dropdown>
                  <Dropdown.Toggle variant='light' className='rounded-pill' style={{ fontSize: "1rem", color: "rgba(0,0,0,0.5)" }}>
                    <i className='fas fa-ellipsis-h'></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        seteditComment(comment.comment);
                        setEdit(true);
                      }}
                    >
                      <i className='fas fa-edit mr-4' style={{ height: 16, width: 16 }}></i>Edit this comment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => deleteComments(comment._id)}>
                      <i className='fas fa-trash-alt mr-4 text-danger' style={{ height: 16, width: 16 }}></i>Delete this comment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
            {edit ? (
              <Form
                onSubmit={(e) => {
                  editComments(e, comment._id, editComment);
                  setEdit(false);
                }}
              >
                <Form.Control type='text' className='rounded-pill w-75 ml-3 p-3' value={editComment} onChange={(e) => seteditComment(e.target.value)} />
              </Form>
            ) : (
              <p className='m-0 mt-2'>{comment.comment}</p>
            )}
          </Col>
        </div>
        <div>
          <Button className='m-0 p-0 text-muted' variant='link'>
            <small>Like</small>
          </Button>{" "}
          |{" "}
          <Button className='m-0 p-0 text-muted' variant='link'>
            <small>Reply</small>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CommentItem;
