import React from "react";
import Moment from "react-moment";
import { Card, Image, Row, Col, Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faGlobeAmericas, faGrinWink, faHandHoldingHeart, faHeart, faLightbulb, faPaperPlane, faShare, faSignLanguage, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Comments from "../../components/PostComments";
import { getFunction, postFunction } from "../../components/CRUDFunctions";
import SearchItem from "../../components/SearchItem";

class Posts extends React.Component {
  state = {
    /************STATE FOR POSTS************* */
    comments: false,
    deletePosts: false,
    reactionsModal: false,
    /******STATES FOR REACTION*******/
    reaction: "1",
    AllComments: [],
    AllReactions: [],
    CommentsPost: [],
    icon: faThumbsUp,
    color: "rgba(0,0,0,0.6)",
    word: "Like",
    numberComments: 0,
    liked: [false, ""],
    next: "",
  };

  toggleComments = () => this.setState({ comments: !this.state.comments });
  toggleDeletePosts = () => this.setState({ deletePost: !this.state.deletePost });
  toggleReactions = () => this.setState({ reactionsModal: !this.state.reactionsModal });

  /*****************REACTIONS************************/

  /******FUNCTIONS FOR REACTION*******/

  componentDidMount = () => {
    this.getReactions();
    this.getComments("offset=0&limit=5");
  };
  isLiked = () => {
    if (this.state.liked[0]) {
      this.postReactions();
      this.setState({ liked: [!this.state.liked[0], ""], color: "rgba(0,0,0,0.6)" });
    } else {
      this.handleChange(1);
    }
  };
  getReactions = async () => {
    let response = await getFunction("post/" + this.props.data._id);
    if (response) {
      let currentState = { ...this.states };
      currentState.AllReactions = response.reactions;
      currentState.numberLikes = currentState.AllReactions.length;
      let userReaction = response.reactions.filter((reaction) => reaction.user._id === this.props.userID);
      currentState.liked = userReaction.length > 0 && [true, userReaction[0]._id];
      currentState.liked[0] && this.likeButton(userReaction[0].reaction);
      this.setState(currentState);
    } else {
      console.log(response);
    }
  };
  getComments = async (query) => {
    const endp = query ? "comments/" + this.props.data._id + "?" + query : "comments/" + this.props.data._id;
    let response = await getFunction(endp);
    if (response) {
      let currentState = { ...this.states };
      currentState.CommentsPost = query ? [...this.state.CommentsPost, ...response.comment] : response.comment;
      currentState.numberComments = response.total;
      currentState.next = response.links && response.links.next ? response.links.next.split("?")[1] : "";
      this.setState(currentState);
    }
  };

  postReactions = async (rate) => {
    let Reaction = {
      user: this.props.userID,
      reaction: rate,
    };
    const response = await postFunction("post/reaction/" + this.props.data._id, Reaction);
    if (response._id) {
      this.getReactions();
    } else {
      console.log(response);
    }
  };

  handleChange = (rate) => {
    this.setState({ reaction: rate });
    this.likeButton(rate);
    this.postReactions(rate);
  };

  likeButton = (rate) => {
    switch (rate) {
      case 1:
        this.setState({ icon: faThumbsUp });
        this.setState({ color: "#5894f5" });
        this.setState({ word: "Like" });
        break;
      case 2:
        this.setState({ icon: faSignLanguage });
        this.setState({ color: "#40ba32" });
        this.setState({ word: "Celebrate" });
        break;
      case 3:
        this.setState({ icon: faHandHoldingHeart });
        this.setState({ color: "#8f4f9c" });
        this.setState({ word: "Support" });
        break;
      case 4:
        this.setState({ icon: faHeart });
        this.setState({ color: "#b81d1d" });
        this.setState({ word: "Love" });
        break;
      case 5:
        this.setState({ icon: faLightbulb });
        this.setState({ color: "#dbcd00" });
        this.setState({ word: "Insightful" });
        break;

      default:
        this.setState({ icon: faThumbsUp });
        this.setState({ color: "gray" });
        this.setState({ word: "Like" });
        break;
    }
  };
  render() {
    let { image, user, text, createdAt, updatedAt, _id } = this.props.data;
    let { deletePost, editPost, userID, userName, profilePicture } = this.props;
    let { name, surname, title } = user;
    let { comments, numberLikes, reactionsModal, AllReactions, numberComments, color, icon, word, CommentsPost, liked, next } = this.state;
    return (
      <Card className='mt-2 posts'>
        <Row className='justify-content-start m-2'>
          <Dropdown>
            <Dropdown.Toggle variant='light' className='rounded-pill' style={{ fontSize: "1.5rem", color: "rgba(0,0,0,0.5)" }}>
              <i className='fas fa-ellipsis-h'></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>
                <i className='fas fa-bookmark mr-4' style={{ height: 16, width: 16 }}></i>Save
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>
                <i className='fas fa-sliders-h mr-4' style={{ height: 16, width: 16 }}></i>Improve Feed
              </Dropdown.Item>
              <Dropdown.Item href='#/action-3'>
                <i className='fas fa-eye-slash mr-4' style={{ height: 16, width: 16 }}></i>Hide this post
              </Dropdown.Item>
              {user._id === userID && (
                <>
                  <Dropdown.Item onClick={() => editPost(_id, text)}>
                    <i className='fas fa-edit mr-4' style={{ height: 16, width: 16 }}></i>Edit this post
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.toggleDeletePosts}>
                    <i className='fas fa-trash-alt mr-4 text-danger' style={{ height: 16, width: 16 }}></i>Delete this post
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Image src={user.image} roundedCircle style={{ height: "50px", width: "50px" }} fluid />

          <Col className='d-flex flex-column'>
            <Row>
              <Link to={"/profile/" + user.username} className='text-dark'>
                <h6 className='d-inline-block ml-3 mr-2 m-0 p-0 post-name-clickable'>
                  {name} {surname}
                </h6>
              </Link>
              <small className='text-muted m-0 p-0'> - 1st</small>
            </Row>
            <small className='text-muted  m-0 p-0'>{title}</small>
            <small className='text-muted  m-0 p-0'>
              {updatedAt === createdAt ? (
                <Moment fromNow>{createdAt}</Moment>
              ) : (
                <span>
                  <Moment fromNow>{updatedAt}</Moment> - Edited
                </span>
              )}
              . - <FontAwesomeIcon icon={faGlobeAmericas} className='ml-1' />
            </small>
          </Col>
        </Row>

        <Card.Body className='d-flex justify-content-between text-wrap pb-0'>
          <Col>
            <Row>
              <p className=' text-wrap text-break '>{text}</p>
            </Row>
            <Row>{image !== undefined && image !== null && !image.startsWith("file") && !image.startsWith("blob") && <Image src={image} fluid />}</Row>
          </Col>
        </Card.Body>
        <p className='border-bottom m-2 mx-3 pb-3' onClick={this.toggleReactions}>
          {numberLikes > 0 && (
            <>
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "5894f5" }} /> {numberLikes}
            </>
          )}
          {numberComments > 0 && <> - {numberComments} Comments</>}{" "}
        </p>

        <Row className='mx-2 reactions d-flex justify-content-around '>
          <Button variant='light' className='likeBtn' onClick={() => this.isLiked()} style={{ color: color }}>
            {liked[0] ? (
              <FontAwesomeIcon icon={icon} style={{ color: color, fontSize: "23px" }} />
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='currentColor' width='24' height='24' focusable='false' className='mr-1'>
                <path d='M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z'></path>
              </svg>
            )}
            <span className='d-none d-lg-inline-block'> {liked[0] ? word : "Like"}</span>{" "}
          </Button>
          <Button variant='light' onClick={this.toggleComments}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgba(0,0,0,0.6)' width='24' height='24' focusable='false' className='mr-1'>
              <path d='M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z'></path>
            </svg>
            <span className='d-none d-lg-inline-block'>Comment</span>{" "}
          </Button>
          <Button variant='light'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgba(0,0,0,0.6)' width='24' height='24' focusable='false' className='mr-1'>
              <path d='M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z'></path>
            </svg>
            <span className='d-none d-lg-inline-block'>Share</span>{" "}
          </Button>
          <Button variant='light'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgba(0,0,0,0.6)' width='24' height='24' focusable='false' className='mr-1'>
              <path d='M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z'></path>
            </svg>
            <span className='d-none d-lg-inline-block'>Send</span>
          </Button>
          <Row className='like-choice'>
            <Button variant='link'>
              <FontAwesomeIcon onClick={() => this.handleChange(1)} icon={faThumbsUp} />
            </Button>
            <Button variant='link'>
              <FontAwesomeIcon onClick={() => this.handleChange(2)} icon={faSignLanguage} />
            </Button>
            <Button variant='link'>
              <FontAwesomeIcon onClick={() => this.handleChange(3)} icon={faHandHoldingHeart} />
            </Button>
            <Button variant='link'>
              <FontAwesomeIcon onClick={() => this.handleChange(4)} icon={faHeart} />
            </Button>
            <Button variant='link'>
              <FontAwesomeIcon onClick={() => this.handleChange(5)} icon={faLightbulb} />
            </Button>
            <Button variant='link'>
              <FontAwesomeIcon icon={faGrinWink} />
            </Button>
          </Row>
        </Row>

        {numberComments !== 0 || comments ? (
          <Comments
            comments={comments ? CommentsPost : [CommentsPost[0]]}
            profilePicture={profilePicture}
            userID={userID}
            userName={userName}
            postId={this.props.data._id}
            getComments={this.getComments}
            next={next}
          />
        ) : (
          <Card.Footer className='py-1 border-0'> Be the first to comment on this </Card.Footer>
        )}

        {this.state.deletePost && (
          <Modal show={true} onHide={this.toggleDeletePosts}>
            <Modal.Header closeButton onClick={this.toggleDeletePosts}>
              <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Are you sure you want to delete this Post?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='success' className='px-5' onClick={this.toggleDeletePosts}>
                No
              </Button>
              <Button
                variant='danger'
                className='px-5'
                onClick={() => {
                  deletePost(_id);
                  setTimeout(() => {
                    this.toggleDeletePosts();
                  }, 500);
                }}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {reactionsModal && (
          <Modal show={true} id='reactionsModal' onHide={this.toggleReactions}>
            <Modal.Header closeButton onClick={this.toggleReactions}>
              <Modal.Title>Reactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col>
                <Row className='justify-content-around pl-2'>
                  <p>Users Name</p>
                  <p>Reaction</p>
                </Row>
                {AllReactions.map((reaction, key) => (
                  <Row key={key} className='justify-content-around m-2 ml-0 pb-2 border-bottom'>
                    <div>
                      <SearchItem data={reaction.user} />
                    </div>
                    <FontAwesomeIcon
                      size='4x'
                      icon={(() => {
                        let result;

                        switch (reaction.reaction) {
                          case 1:
                            result = faThumbsUp;
                            break;
                          case 2:
                            result = faSignLanguage;
                            break;
                          case 3:
                            result = faHandHoldingHeart;
                            break;
                          case 4:
                            result = faHeart;
                            break;
                          case 5:
                            result = faLightbulb;
                            break;
                          default:
                            result = faSignLanguage;
                            break;
                        }
                        return result;
                      })()}
                    />
                  </Row>
                ))}
              </Col>
            </Modal.Body>
          </Modal>
        )}
      </Card>
    );
  }
}

export default Posts;
