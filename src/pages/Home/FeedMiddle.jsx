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
import { deleteFunction, getFunction, postFunction, postFunctionImage, putFunction } from "../../components/CRUDFunctions";
import InfiniteScroll from "react-infinite-scroller";

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
    next: "",
    position: Math.max(document.documentElement.scrollHeight, document.documentElement.offsetHeight),
  };

  componentDidMount = () => {
    this.getPosts("offset=0&limit=5");
  };

  // --------------------GET THE POSTS FROM API
  getPosts = async (query) => {
    const endp = query ? "post?" + query : "post";
    const response = await getFunction(endp);
    console.log(response);
    if (response) {
      setTimeout(() => {
        this.setState({
          posts: query ? [...this.state.posts, ...response.posts] : response.posts,
          next: response.links && response.links.next ? response.links.next.split("?")[1] : "",
          loadingPosts: true,
        });
      }, 10);
    } else {
      console.log(response);
    }
  };

  //-------------------POST TEXT DATA TO API
  postData = async () => {
    let data = { ...this.state.currentPost, user: this.props.userID };
    const response = await postFunction("post/", data);
    if (response._id) {
      this.state.currentPost.text === " " ? this.setState({ currentPostId: response._id, postImage: { post: "" }, inputImage: [] }) : this.setState({ currentPost: { text: " " }, currentPostId: "" });
      this.state.currentPost.text === " " && this.state.startPostModal && this.setState({ openPhotoFromPost: true });
      setTimeout(() => {
        this.getPosts();
      }, 10);
    } else {
      console.log(response);
    }
  };
  //----------------------------POST IMAGE TYPE

  imagePost = async (id, file) => {
    this.setState({ loadingPosts: false });
    let formData = new FormData();
    formData.append("image", file);
    const response = await postFunctionImage("post/" + id + "/upload", formData);
    if (response) {
      this.state.currentPost.text === " "
        ? this.setState({ openPhotoFromPost: true, currentPostId: response._id, postImage: { post: "" }, inputImage: [] })
        : this.setState({ currentPost: { text: " " }, postingCurrentId: "", loadingPosts: true });
      setTimeout(() => {
        this.getPosts("offset=0&limit=5");
      }, 1000);
    } else {
      console.log(response);
    }
  };
  //-----------------------------EDIT EXSISTING POST
  putData = async (event) => {
    event !== undefined && event.preventDefault();
    this.setState({ loadingPosts: false });
    let { currentPost, currentPostId } = this.state;
    const response = await putFunction("post/" + currentPostId, currentPost);
    if (response) {
      currentPost.text = " ";
      currentPostId = "";
      this.setState({ currentPost, currentPostId, editModal: false });
      this.getPosts();
    } else {
      console.log(response);
    }
  };
  //--------------------------------DELETE POST----------------
  deletePost = async (id) => {
    const response = await deleteFunction("post/" + id);
    if (response) {
      this.getPosts();
    } else {
      console.log(response);
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
    let { currentPost, currentPostId, postImage } = this.state;
    console.log(currentPostId);
    if (this.state.openPhotoFromPost && item === "photo") {
      let postImage = data;
      this.setState({ inputImage });
      this.setState({ postImage });
    } else if (this.state.openPhotoFromPost && item === "startPost") {
      currentPost.text = data;
      this.setState({ currentPost });
      this.putData();
      this.imagePost(currentPostId, postImage);
    } else if (!this.state.openPhotoFromPost && item === "photo") {
      let postImage = data;
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
    currentstate.inputImage = [];
    currentstate.currentPost = { text: " " };
    this.setState(currentstate);
  };
  render() {
    const { photoModal, videoModal, articleModal, inputImage, startPostModal, eventsModal, loadingPosts, posts, editModal, currentPost, next, position } = this.state;
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
        <InfiniteScroll
          pageStart={0}
          hasMore={next}
          loadMore={() => this.getPosts(next)}
          loader={
            <Card className='d-flex justify-content-center mt-2 align-content-center'>
              <PostLoader className='w-100 h-100 p-4' />
            </Card>
          }
        >
          {loadingPosts
            ? posts.length > 0 &&
              posts.map((post, key) => key < 50 && <Posts name={name} userID={userID} profilePicture={profilePicture} key={key} data={post} deletePost={this.deletePost} editPost={this.editPost} />)
            : Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
                <Card key={i} className='d-flex justify-content-center mt-2 align-content-center'>
                  <PostLoader className='w-100 h-100 p-4' />
                </Card>
              ))}
        </InfiniteScroll>
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
