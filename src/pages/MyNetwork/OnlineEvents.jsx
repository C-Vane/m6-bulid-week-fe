import React, { Component } from "react";
import "./OnlineEvents.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class OnlineEvents extends Component {
  render() {
    return (
      <div className='p-0 border mt-3' id='invitations'>
        <div className='top d-flex justify-content-between pl-3 py-2'>
          <h5>Online events for you</h5>
          <button className='ignore d-flex justify-content-center align-items-center' style={{ width: "6rem" }}>
            See all
          </button>
        </div>

        <div className='row ml-2 mt-2 events-for-me'>
          <Col>
            <Card style={{ width: "17rem", borderRadius: "10px", marginBottom: "0.8rem" }}>
              <Card.Img
                className='zLessImg'
                variant='top'
                src='https://media-exp1.licdn.com/dms/image/C4E1EAQF0Ly_GJoelww/event-background-image-shrink_200_800/0/1607686049659?e=1612011600&v=beta&t=nLrsBG3uhBceC5HZ__FtGTbH0jlujNawL9ZLnIdntlM'
              />
              <img
                className='zTopImg'
                src='https://media-exp1.licdn.com/dms/image/C4E1EAQED8MNLqexXdg/event-logo-shrink_400_400/0/1607685399416?e=1612011600&v=beta&t=3YLDt1VLX6ukL6bDanf9rsgLGB_BukL7BH5bGsrng8I'
                alt=''
              />
              <button id='close' className='d-flex justify-content-center align-items-center'>
                <i class='fas fa-times'></i>
              </button>
              <Card.Body className='body p-2'>
                <Card.Title className='mt-4'>
                  <Link className='myLink'>
                    <h5 className='m-0'>Digital Health in Motion</h5>
                  </Link>
                  <small className='text-secondary m-0'>Tue, Dec 8, 4:00 pm</small>
                </Card.Title>
                <Card.Text className='text mt-3'>
                  <p className='text-secondary'>909 attandances</p>
                </Card.Text>
                <Button id='main-button' variant='primary' className='mr-0 d-flex justify-content-center align-items-center'>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "17rem", borderRadius: "10px", marginBottom: "0.8rem" }}>
              <Card.Img
                className='zLessImg'
                variant='top'
                src='https://media-exp1.licdn.com/dms/image/C4E1EAQHHidGH4MX4bg/event-background-image-shrink_200_800/0/1609774065707?e=1612011600&v=beta&t=Oq3c2_RY0BBSbVgA3Hf2WGw90CWmPTyoBFqLuVzYnZ0'
              />
              <img
                className='zTopImg'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQFX_38IiUTe6Q/event-logo-shrink_200_200/0/1609779181795?e=1612011600&v=beta&t=mzUl3LwWpQgACTFWh39wcqJgIaznHF1BmYlhmFnNfjc'
                alt=''
              />
              <button id='close' className='d-flex justify-content-center align-items-center'>
                <i class='fas fa-times'></i>
              </button>
              <Card.Body className='body p-2'>
                <Card.Title className='mt-4'>
                  <Link className='myLink'>
                    <h5 className='m-0'>ASIA-TECH Virtual 202...</h5>
                  </Link>
                  <small className='text-secondary m-0'>Tue, Dec 8, 4:00 pm</small>
                </Card.Title>
                <Card.Text className='text mt-3'>
                  <p className='text-secondary'>909 attandances</p>
                </Card.Text>
                <Button id='main-button' variant='primary' className='mr-0 d-flex justify-content-center align-items-center'>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "17rem", borderRadius: "10px", marginBottom: "0.8rem" }}>
              <Card.Img
                className='zLessImg'
                variant='top'
                src='https://media-exp1.licdn.com/dms/image/C561EAQEvuoaC2LtIuw/event-background-image-shrink_200_800/0/1611339258831?e=1612011600&v=beta&t=qr5OpAt-7OBS85eROw9rUD4AdAsNJBrZBlTlx5TKOPg'
              />
              <img
                className='zTopImg'
                src='https://media-exp1.licdn.com/dms/image/C561EAQGucpCXqIOtdw/event-logo-shrink_400_400/0/1611339258752?e=1612011600&v=beta&t=tFBud5mL09cSgfS7oZg1JQk01d5euODrq0DQ4NPqemw'
                alt=''
              />
              <button id='close' className=''>
                <i class='fas fa-times'></i>
              </button>
              <Card.Body className='body p-2'>
                <Card.Title className='mt-4'>
                  <Link className='myLink'>
                    <h5 className='m-0'>Small and Advanced React...</h5>
                  </Link>
                  <small className='text-secondary m-0'>Tue, Dec 8, 4:00 pm</small>
                </Card.Title>
                <Card.Text className='text mt-3'>
                  <p className='text-secondary'>909 attandances</p>
                </Card.Text>
                <Button id='main-button' variant='primary' className='mr-0 d-flex justify-content-center align-items-center'>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "17rem", borderRadius: "10px", marginBottom: "0.8rem" }}>
              <Card.Img
                className='zLessImg'
                variant='top'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQEHFh_zWf_npQ/event-background-image-shrink_200_800/0/1606482538910?e=1612011600&v=beta&t=x8guQgm4QhoUAAANptm1xZ5fNK7XRoNDLe42-eb9VJU'
              />
              <img
                className='zTopImg'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQH-yF8vvjc2_w/event-logo-shrink_200_200/0/1606481161118?e=1612011600&v=beta&t=N-x1PpOkm6fNXg23MJf_9TPbJ1TvbaSC8-9IjzBM8DE'
                alt=''
              />
              <button id='close' className='d-flex justify-content-center align-items-center'>
                <i class='fas fa-times'></i>
              </button>
              <Card.Body className='body p-2'>
                <Card.Title className='mt-4'>
                  <Link className='myLink'>
                    <h5 className='m-0'>Virtual Pipeline Summit ...</h5>
                  </Link>
                  <small className='text-secondary m-0'>Tue, Dec 8, 4:00 pm</small>
                </Card.Title>
                <Card.Text className='text mt-3'>
                  <p className='text-secondary'>909 attandances</p>
                </Card.Text>
                <Button id='main-button' variant='primary' className='mr-0 d-flex justify-content-center align-items-center'>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "17rem", borderRadius: "10px", marginBottom: "0.8rem" }}>
              <Card.Img
                className='zLessImg'
                variant='top'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQFswxgLVA-95A/event-background-image-shrink_200_800/0/1610145241222?e=1612011600&v=beta&t=-W3LAfxLWpoAJQr_FWDxoH_bwbjROFw5O62iYeSfSlE'
              />
              <img
                className='zTopImg'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQEDhMc9x3MEGw/event-logo-shrink_200_200/0/1610153150446?e=1612011600&v=beta&t=oJw7DRzMh6x8VdKJsVLoMNaj14L-ShBkcDr8F2b1N5U'
                alt=''
              />
              <button id='close' className='d-flex justify-content-center align-items-center'>
                <i class='fas fa-times'></i>
              </button>
              <Card.Body className='body p-2'>
                <Card.Title className='mt-4'>
                  <Link className='myLink'>
                    <h5 className='m-0'>Manufacturing Show 2021</h5>
                  </Link>
                  <small className='text-secondary m-0'>Tue, Dec 8, 4:00 pm</small>
                </Card.Title>
                <Card.Text className='text mt-3'>
                  <p className='text-secondary'>909 attandances</p>
                </Card.Text>
                <Button id='main-button' variant='primary' className='mr-0 d-flex justify-content-center align-items-center'>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "17rem", borderRadius: "10px", marginBottom: "0.8rem" }}>
              <Card.Img
                className='zLessImg'
                variant='top'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQFkbiG8SDpa_A/event-background-image-shrink_200_800/0/1605035325063?e=1612011600&v=beta&t=SC-xy6v7prf3xPHwwugtczCtoWGwCcmVFfFFHcsffig'
              />
              <img
                className='zTopImg'
                src='https://media-exp1.licdn.com/dms/image/C4D1EAQHcJlmG4ye_XA/event-logo-shrink_200_200/0/1605035325075?e=1612011600&v=beta&t=Ic78xnXFbETmbQrm1D55UONzjqxNx8B-Dg_D5BQufT8'
                alt=''
              />
              <button id='close' className='d-flex justify-content-center align-items-center'>
                <i class='fas fa-times'></i>
              </button>
              <Card.Body className='body p-2'>
                <Card.Title className='mt-4'>
                  <Link className='myLink'>
                    <h5 className='m-0'>Atomico’s State of Europ...</h5>
                  </Link>
                  <small className='text-secondary m-0'>Tue, Dec 8, 4:00 pm</small>
                </Card.Title>
                <Card.Text className='text mt-3'>
                  <p className='text-secondary'>909 attandances</p>
                </Card.Text>
                <Button id='main-button' variant='primary' className='mr-0 d-flex justify-content-center align-items-center'>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>

        {/* <div className="text-center brdr-top">
                    <div
                        to="/"
                        className="see-all-btn font-weight-bold d-block py-2"
                        style={{cursor: 'pointer'}}
                        // onClick={() => this.showMoreHandler ()}
                    > show more
                    </div>
                </div> */}
      </div>
    );
  }
}
