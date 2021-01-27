import React from "react";
import { Navbar, Nav, Image, NavDropdown, Row, Button, Container, Col, Modal, Card, ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcase,
  faCertificate,
  faChartBar,
  faChevronCircleDown,
  faCommentDots,
  faCompress,
  faHome,
  faInfo,
  faMoneyBill,
  faPlay,
  faTh,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import "./style/NavFooter.css";
import SearchItem from "./SearchItem";
import { getFunction } from "./CRUDFunctions";
import PostItem from "./PostItem";

class NavBar extends React.Component {
  state = {
    show: false,
    name: this.props.name,
    jobTitle: this.props.jobTitle,
    profilePicture: this.props.profilePicture,
    userID: this.props.userID,
    searchInput: "",
    searchUsers: [],
    searchPosts: [],
    showSearchResults: false,
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.name !== prevProps.name) {
      this.setState({ name: this.props.name, jobTitle: this.props.jobTitle, userID: this.props.userID });
    }

    if (this.props.profilePicture !== prevState.profilePicture) {
      this.setState({ profilePicture: this.props.profilePicture });
    }

    if (this.state.searchInput.length !== prevState.searchInput.length) {
      if (this.state.searchInput.length > 2) {
        this.fetchSearchResultsHandler();
      } else this.setState({ showSearchResults: false });
    }
  };

  fetchSearchResultsHandler = async () => {
    let user = await getFunction("profile?search=" + this.state.searchInput);
    let post = await getFunction("post?search=" + this.state.searchInput);
    console.log(user, post);
    user && post && this.setState({ searchUsers: user, searchPosts: post, showSearchResults: true });
  };

  searchInputTextHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div id='navbar'>
        <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
          <Container>
            <Link to='/feed'>
              <Image src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' id='logo' rounded />
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' style={{ position: "fixed", right: "30px", top: "10px" }} />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <div className='nav-search-bar d-flex align-items-center'>
                  <i className='fas fa-search'></i>
                  <input type='text' placeholder='Search' className='mr-2' onChange={this.searchInputTextHandler} value={this.state.searchInput}></input>
                  {this.state.showSearchResults && this.state.searchInput && (
                    <div className='search-results-container swing-in-top-fwd  p-2'>
                      <div className='brdr-bottom-strict m-2 p-2'>
                        <h4>People</h4>
                        {this.state.searchUsers.length > 0 ? (
                          this.state.searchUsers.map((e, index) => {
                            return <SearchItem key={index} data={e} />;
                          })
                        ) : (
                          <span className='text-muted'>No People found with {this.state.searchInput}</span>
                        )}
                      </div>
                      <div className='m-2 p-2'>
                        <h4>Posts</h4>
                        {this.state.searchPosts.posts.length > 0 ? (
                          this.state.searchPosts.posts.map((e, index) => {
                            return <PostItem key={index} data={e} />;
                          })
                        ) : (
                          <span className='text-muted'>No People found with {this.state.searchInput}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Nav>
              <Nav className='ml-auto d-flex align-items-center'>
                <Link to='/feed'>
                  <div className={pathname === "/feed" ? "nav-link active" : "nav-link"}>
                    <FontAwesomeIcon icon={faHome} size='lg' />
                    <small>Home</small>
                  </div>
                </Link>
                <Link to='/network'>
                  <div className={pathname === "/network" ? "nav-link active" : "nav-link"}>
                    <FontAwesomeIcon icon={faUserFriends} size='lg' />
                    <small>My Network</small>
                  </div>
                </Link>
                <Link to='./jobs'>
                  <div className={pathname === "/jobs" ? "nav-link active" : "nav-link"}>
                    <FontAwesomeIcon icon={faBriefcase} size='lg' />
                    <small>Jobs</small>
                  </div>
                </Link>
                <Link to='/messeging'>
                  <div className={pathname === "/messeging" ? "nav-link active" : "nav-link"}>
                    <FontAwesomeIcon icon={faCommentDots} size='lg' />
                    <small>Messaging</small>
                  </div>
                </Link>
                <Link to='/notifications'>
                  <div className={pathname === "/notifications" ? "nav-link active" : "nav-link"}>
                    <FontAwesomeIcon icon={faBell} size='lg' />
                    <small>Notifications</small>
                  </div>
                </Link>
                <div id='dropdown' className='ml-3 text-center'>
                  <Image style={{ width: "20px", height: "25px" }} className='pt-1' src={this.state.profilePicture} roundedCircle />
                  <NavDropdown title='Me' id='basic-nav-dropdown'>
                    <div className='dropdown-item'>
                      <div>
                        <div className='d-flex justify-content-start align-items-center'>
                          <Image style={{ maxWidth: "50px", maxHeight: "50px" }} src={this.state.profilePicture} roundedCircle className='mr-1' />
                          <div className='d-flex flex-column align-items-start justify-content-start'>
                            <h6 className='mb-0'>{this.state.name}</h6>
                            <small className='mt-0'>{this.state.jobTitle}</small>
                          </div>
                        </div>
                        <div className='mt-3' style={{ height: 28 }}>
                          <Link to={"/profile/" + `${this.state.userID}`}>
                            <Button variant='outline-primary' className='rounded-pill'>
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <NavDropdown.Divider />
                      <h6>Account</h6>
                      <Link to='/settings'>
                        <div className={pathname === "/settings" ? "nav-link active" : "nav-link"}>
                          <p>Setting & Privacy</p>
                        </div>
                      </Link>
                      <Link to='/help'>
                        <div className={pathname === "/help" ? "nav-link active" : "nav-link"}>
                          <p>Help</p>
                        </div>
                      </Link>
                      <Link to='/language'>
                        <div className={pathname === "/language" ? "nav-link active" : "nav-link"}>
                          <p>Language</p>
                        </div>
                      </Link>
                      <NavDropdown.Divider />
                      <h6>Manage</h6>
                      <Link to='/posts'>
                        <div className={pathname === "/posts" ? "nav-link active" : "nav-link"}>
                          <p>Posts & Activity</p>
                        </div>
                      </Link>
                      <Link to='/jobPosting'>
                        <div className={pathname === "/jobPosting" ? "nav-link active" : "nav-link"}>
                          <p>Job Posting Account</p>
                        </div>
                      </Link>
                      <NavDropdown.Divider />
                      <Link to='/signOut'>
                        <div className={pathname === "/signOut" ? "nav-link active" : "nav-link"}>
                          <p>Sign Out</p>
                        </div>
                      </Link>
                    </div>
                  </NavDropdown>
                </div>

                <div className={pathname === "/signOut" ? "nav-link active" : "nav-link"} id='work-modal' onClick={this.handleShow}>
                  <FontAwesomeIcon icon={faTh} size='lg' />
                  <small>Work</small>
                </div>

                <Link to='/learning'>
                  <div className={pathname === "/learning" ? "nav-link active p-2" : "nav-link p-2"}>
                    <div id='learning'>
                      <FontAwesomeIcon icon={faPlay} size='sm' />
                    </div>
                    <small>Learning</small>
                  </div>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={this.state.show} onHide={this.handleClose} className='modal-dialog-scrollable'>
          <Modal.Body>
            <Card style={{ width: "20rem" }}>
              <Card.Header>Visit More LinkedIn Products</Card.Header>
              <Card.Body>
                <Row sm={4}>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faChartBar} size='2x' />
                    </Button>
                  </Col>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faCertificate} size='2x' />
                    </Button>
                  </Col>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faChevronCircleDown} size='2x' />
                    </Button>
                  </Col>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faCompress} size='2x' />
                    </Button>
                  </Col>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faUserFriends} size='2x' />
                    </Button>
                  </Col>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faInfo} size='2x' />
                    </Button>
                  </Col>
                  <Col>
                    <Button className='mt-2 btn-light'>
                      <FontAwesomeIcon icon={faMoneyBill} size='2x' />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem", marginTop: "20px" }}>
              <Card.Header>LinkedIn Business Services</Card.Header>
              <ListGroup variant='flush'>
                <ListGroup.Item>Talent Solutions</ListGroup.Item>
                <ListGroup.Item>Sales Solution</ListGroup.Item>
                <ListGroup.Item>Post a job fro free</ListGroup.Item>
                <ListGroup.Item>Marketing Solutions</ListGroup.Item>
                <ListGroup.Item>Learning Solutions</ListGroup.Item>
              </ListGroup>
              <Card.Footer> Create a Company Page +</Card.Footer>
            </Card>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withRouter(NavBar);
