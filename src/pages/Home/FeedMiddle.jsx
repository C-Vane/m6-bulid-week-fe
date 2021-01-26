import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Form, Modal, Row } from "react-bootstrap";
import ArticleModal from "./ArticleModal";
import EventsModal from "./EventsModal";
import PostLoader from "../../components/loaders/PostLoader";
import PhotoModal from "../../components/PhotoModal";
import Posts from "./Posts";
import StartPost from "../../components/StartPost";

class FeedMiddle extends React.Component {
  state = {
    openPhotoFromPost: false,
    photoModal: false,
    videoModal: false,
    articleModal: false,
    startPostModal: false,
    eventsModal: false,
    editModal: false,
    currentPostId: "",
    currentPost: {
      text: " ",
    },
    loadingPosts: false,
    posts: [],
    inputImage: [],
    postImage: "",
  };

  componentDidMount = () => {
    this.getPosts();
  };

  // --------------------GET THE POSTS FROM API
  getPosts = async (id) => {
    let url = "https://striveschool-api.herokuapp.com/api/posts/";

    try {
      const response = await fetch(url, {
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        let result = await response.json();
        result = result.reverse();
        this.setState({ posts: result, loadingPosts: true });
      } else {
        console.log(response);
        this.setState({ loadingPosts: true });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loadingPosts: true });
    }
  };

  //-------------------POST TEXT DATA TO API
  postData = async () => {
    let data = this.state.currentPost;
    let url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.state.currentPost.text === " " ? this.setState({ currentPostId: data._id, postImage: { post: "" }, inputImage: [] }) : this.setState({ currentPost: { text: " " }, currentPostId: "" });
        this.state.currentPost.text === " " && this.state.startPostModal && this.setState({ openPhotoFromPost: true });
        setTimeout(() => {
          this.getPosts();
        }, 1000);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //----------------------------POST IMAGE TYPE

  imagePost = async (id, file) => {
    let formData = new FormData();
    formData.append("post", file);
    let url = "https://striveschool-api.herokuapp.com/api/posts/" + id;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.state.currentPost.text === " "
          ? this.setState({ openPhotoFromPost: true, currentPostId: data._id, postImage: { post: "" }, inputImage: [] })
          : this.setState({ currentPost: { text: " " }, postingCurrentId: "" });
        setTimeout(() => {
          this.getPosts();
        }, 1000);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //-----------------------------EDIT EXSISTING POST
  putData = async (event) => {
    event !== undefined && event.preventDefault();
    let { currentPost, currentPostId } = this.state;

    let editPost = {
      text: currentPost.text + " ",
    };

    let url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const response = await fetch(url + currentPostId, {
        method: "PUT",
        body: JSON.stringify(editPost),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      if (response.ok) {
        setTimeout(() => {
          this.getPosts();
        }, 1000);
        currentPost.text = " ";
        currentPostId = "";
        this.setState({ currentPost, currentPostId, editModal: false });
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //--------------------------------DELETE POST----------------
  deletePost = async (id) => {
    let url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const response = await fetch(url + id, {
        method: "DELETE",
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        this.getPosts();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //---------------------HANDEL CHANGE FOR EDITING POSTS
  handelChange = (e) => {
    let { currentPost } = this.state;
    currentPost.text = e.target.value;
    this.setState({ currentPost });
  };
  //----------------------HANDEL DATA FROM COMPONENETS AND CALL FUNCTIONS
  sendPosts = async (data, inputImage, item) => {
    this.state.photoModal && (await this.postData());
    this.toggleModal(item);
    let { currentPost } = this.state;
    if (this.state.openPhotoFromPost && item === "photo") {
      let postImage = data;
      this.setState({ inputImage });
      this.setState({ postImage });
    } else if (this.state.openPhotoFromPost && item === "startPost") {
      currentPost.text = data;
      this.setState({ currentPost });
      let { currentPostId, postImage } = this.state;
      this.putData();
      this.imagePost(currentPostId, postImage);
    } else if (!this.state.openPhotoFromPost && item === "photo") {
      let postImage = data;
      let { currentPostId } = this.state;
      this.imagePost(currentPostId, postImage);
    } else {
      currentPost.text = data;
      this.setState({ currentPost });
      this.postData();
    }
  };

  //-----------------HANDELE EDIT POST MODAL
  editPost = (id, post) => {
    this.toggleModal("edit");
    const { currentPost } = this.state;
    currentPost.text = post;
    this.setState({ currentPostId: id, currentPost });
  };
  //----------------HANDEL TOGGLE FOR ALL MODALS
  toggleModal = (item, from) => {
    const currentstate = { ...this.state };
    currentstate[item + "Modal"] = !currentstate[item + "Modal"];
    this.setState(currentstate);
  };
  render() {
    const { photoModal, videoModal, articleModal, inputImage, startPostModal, eventsModal, loadingPosts, posts, editModal, currentPost } = this.state;
    const { name, userID, profilePicture } = this.props;
    return (
      <div id='feedMiddle'>
        <div className='brdr-bottom mb-4 pb-4'>
          {/*----------------------------- ADD POST -------------------------------- */}

          <Card className='px-4 pt-3 pb-2' id='cardPost'>
            <div>
              <Button variant='light' className='w-100 rounded-pill font-small text-left' onClick={() => this.toggleModal("startPost")}>
                <i className='far fa-edit grey-text' style={{ fontSize: "1.2rem" }}></i>
                <span className='ml-2 grey-text'>Start a post</span>
              </Button>
            </div>
            <Row className='justify-content-around mt-2'>
              <Button onClick={() => this.toggleModal("photo")} variant='light'>
                <FontAwesomeIcon icon={faPhotoVideo} style={{ color: "rgb(112, 181, 249)" }} /> <span className='ml-1'>Photo</span>
              </Button>
              <Button onClick={() => this.toggleModal("video")} variant='light'>
                <i className='fab fa-youtube' style={{ color: "rgb(231, 163, 62)" }}></i>
                <span className='ml-1'>Video</span>
              </Button>
              <Button onClick={() => this.toggleModal("events")} variant='light'>
                <i className='far fa-calendar' style={{ color: "rgb(160, 180, 183)" }}></i> <span className='ml-1'>Event</span>
              </Button>
              <Button onClick={() => this.toggleModal("startPost")} variant='light'>
                <i className='fas fa-indent' style={{ color: "rgb(127, 193, 94)" }}></i>
                <span className='ml-2'>Write article</span>
              </Button>
            </Row>
          </Card>
        </div>

        {/*----------------------------- CHILD COMPONENETS -------------------------------- */}

        {photoModal && <PhotoModal title='photo' show={true} onHide={this.toggleModal} sendPosts={this.sendPosts} />}
        {videoModal && <PhotoModal title='video' show={true} onHide={this.toggleModal} />}
        {articleModal && <ArticleModal show={true} />}
        {eventsModal && <EventsModal title='events' show={true} onHide={this.toggleModal} />}
        {startPostModal && <StartPost show={true} name={name} userID={userID} onHide={this.toggleModal} sendPosts={this.sendPosts} inputImage={inputImage != null && inputImage} />}
        {loadingPosts
          ? posts.length > 0 &&
            posts.map((post, key) => key < 50 && <Posts name={name} userID={userID} profilePicture={profilePicture} key={key} data={post} deletePost={this.deletePost} editPost={this.editPost} />)
          : Array.from({ length: 2 }, (_, i) => i + 1).map((i) => (
              <Card key={i} className='d-flex justify-content-center mt-2 align-content-center'>
                <PostLoader className='w-100 h-100 p-4' />
              </Card>
            ))}

        {/*----------------------------- EDIT MODAL -------------------------------- */}
        {editModal && (
          <div>
            <Modal show={editModal} id='editModal' onHide={() => this.toggleModal("edit")}>
              <Form onSubmit={this.putData}>
                <Modal.Header closeButton onClick={() => this.toggleModal("edit")}>
                  <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                    <Form.Label>Edit your post</Form.Label>
                    <Form.Control as='textarea' id='description' rows={3} value={currentPost.text} onChange={this.handelChange} />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='primary' className='rounded-pill' type='submit'>
                    Save
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

export default FeedMiddle;
