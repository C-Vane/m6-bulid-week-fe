import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, InputGroup, FormControl, Container, Card, Dropdown } from "react-bootstrap";
import Picture from "../../assets/0.jpg";

export default class Jobs extends Component {
  state = {
    showApplicant: false,
  };

  showApplicantHandler = () => {
    this.state.showApplicant ? this.setState({ showApplicant: false }) : this.setState({ showApplicant: true });
  };

  render() {
    return (
      <Container id='jobs-main-container' className='mt-5 pt-5'>
        <div className='jobs-container mb-3 bg-white text-secondary d-flex justify-content-between align-items-center py-2 px-4'>
          <div className='d-flex align-items-center'>
            <p className='jobs-link font-weight-bold mr-3 mb-0 pl-2 pr-3 py-1 brdr-right'>
              <i class='fas fa-bookmark pr-2'></i>My Jobs
            </p>
            <p className='jobs-link font-weight-bold mr-3 mb-0 pl-2 pr-3 py-1 brdr-right'>
              <i class='fas fa-bell pr-2'></i>My Alerts
            </p>
            <p className='jobs-link font-weight-bold mr-3 mb-0 pl-2 pr-3 py-1 brdr-right'>
              <i class='fas fa-money-bill-alt pr-2'></i>Salary
            </p>
            <p className='jobs-link font-weight-bold mr-1 mb-0 pl-2 pr-3 py-1 brdr-right'>
              <i class='fas fa-file pr-2'></i>Interview Prep
            </p>

            <p className='jobs-link mr-5 mb-0 pl-2 pr-3'>
              <Dropdown>
                <Dropdown.Toggle className='more-dropdown' variant='secondary' id='dropdown-basic'>
                  More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </p>
          </div>
          <div>
            <Link className='no-underline' to='/talentSolutions'>
              <div className='post-btn-container d-flex align-items-center justify-content-center'>
                <button className=' post-job-btn' type='button'>
                  <i class='fas fa-edit'></i>
                  Post for a free job
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className='search-jobs-container mb-3'>
          <div className='font-weight-light'>
            <h4 className='font-weight-light text-center mb-3'>Search for your next Job</h4>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='mr-3' style={{ width: "45%" }}>
              <InputGroup className='search-input-container'>
                <i className='fas fa-search'></i>
                <FormControl className='search-input' placeholder='Search by title skill or company' aria-label='Username' aria-describedby='basic-addon1' />
              </InputGroup>
            </div>

            <div className='mr-3' style={{ width: "45%" }}>
              <InputGroup className='search-input-container'>
                <i className='fas fa-map-marker-alt'></i>
                <FormControl className='search-input' placeholder='City State or zip code' aria-label="Recipient's username" aria-describedby='basic-addon2' />
              </InputGroup>
            </div>

            <div style={{ width: "10%" }}>
              <Button className='search-btn'>Search</Button>
            </div>
          </div>
        </div>
        <div className='suggested-jobs-searches d-flex justify-content-center flex-column my-3'>
          <p className='mb-2'>Suggested job searches</p>
          <div className='suggested-buttons-container d-flex align-items-center'>
            <Button className='suggested-btn btn-reg mr-2'>remote</Button>
            <Button className='suggested-btn btn-reg mr-2'>amazon</Button>
            <Button className='suggested-btn btn-reg mr-2'>google</Button>
            <Button className='suggested-btn btn-reg mr-2'>facebook</Button>
            <Button className='suggested-btn btn-reg mr-2'>twitter</Button>
            <Button className='suggested-btn btn-small mr-2'>ai</Button>
            <Button className='suggested-btn btn-large mr-2'>machine learning</Button>
          </div>
        </div>

        <div className='recommended-container'>
          <div className='mb-3'>
            <h4 className=' font-weight-normal mb-0 justify-content-center'>Recommended for you</h4>
            <p className='grey-text mb-0'>Based on your profile and search history</p>
          </div>
          <div className='mb-3'>
            <Row>
              <Col xs={3} className='mb-4'>
                <Card className='job-card' style={{ backgroundColor: "rgba(0, 255, 132,0.1)" }}>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <div className='d-flex flex-column justify-content-center align-items-end'>
                        <small className='grey-text' style={{ fontSize: 12 }}>
                          Sponsored Post
                        </small>
                        <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                      </div>
                    </div>
                    <Card.Title className='job-card-title mb-2'>Sexy Beast</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>Italy</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      2 days ago -
                      <Link className='ml-1 font-weight-bold' style={{ color: "green" }} onClick={this.showApplicantHandler}>
                        1 applicant
                      </Link>
                      {this.state.showApplicant && (
                        <div className='show-applicant-container swing-in-top-fwd'>
                          <div className='d-flex align-items-center'>
                            <img src={Picture} className='applicant-picture mr-2'></img>
                            <p className='font-weight-bold mb-0'>Stefano Casasola has applied for this job.</p>
                          </div>
                        </div>
                      )}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={3} className='mb-4'>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>AI Consultant</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>London</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      3 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        1 applicant
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={3} className='mb-4'>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>React Developer</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>Spain</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      1 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        4 applicants
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>

              <Col xs={3} className='mb-4'>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>Full Stack Tutor</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>Italy</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      4 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        12 applicants
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>Project Lead</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>Global</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      2 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        4 applicants
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>AI Tutor</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>London</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      2 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        8 applicants
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>Talent Acquisition Lead</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>Global</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      6 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        2 applicants
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className='job-card'>
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-start mb-3'>
                      <div
                        className='img-card-jobs'
                        style={{
                          background: `url("https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/strive-20school-20logo.png")`,
                        }}
                      />
                      <i className='fas fa-ellipsis-h' style={{ color: "rgba(0,0,0,0.6)" }}></i>
                    </div>
                    <Card.Title className='job-card-title mb-2'>React Developer</Card.Title>
                    <Card.Subtitle className='job-card-subtitle mb-2 grey-text'>Italy</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className='d-flex align-items-center' style={{ height: 120 }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' data-supported-dps='24x24' fill='rgb(5, 118, 66)' className='mr-2' width='24' height='24' focusable='false'>
                        <path d='M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z'></path>
                      </svg>
                      <small className='mb-0  grey-text'>Actively Recruiting</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className='job-card-footer'>
                    <small className='grey-text'>
                      6 weeks ago -
                      <span className='ml-1 font-weight-bold' style={{ color: "green" }}>
                        6 applicants
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}
