import React, { Component } from 'react'
import "./OnlineEvents.css"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default class OnlineEvents extends Component {
    render() {
        return (
            <div className="p-0 border mt-3" id="invitations">
                <div className="top d-flex justify-content-between pl-3 py-2">
                    <h5>Online events for you</h5>
                    <button
                        className="ignore d-flex justify-content-center align-items-center"
                        style={{width: '6rem'}}
                    >
                        See all
                    </button>
                </div>

                <div className="row ml-2 mt-2 events-for-me">
                <Col>
                    <Card style={{ width: '17rem', borderRadius: "10px", marginBottom: "0.8rem"}}>
                        <Card.Img className="zLessImg" variant="top" src="https://media-exp1.licdn.com/dms/image/C4D1EAQH-P0IVkQlN8Q/event-background-image-shrink_200_800/0?e=1607162400&v=beta&t=WAKeDw3uS8EFTY2WgJ95beqy9-80siDhBdTIePZxM14"
                        />
                        <img className="zTopImg" src="https://media-exp1.licdn.com/dms/image/C4D1EAQEARX-nKHQpHw/event-logo-shrink_200_200/0/1606300731938?e=1607162400&v=beta&t=ws59v2Kp6rIws2M9X889P5e__djHpsBklg5b_5NE_1M" alt=""/>
                        <button id="close" className="d-flex justify-content-center align-items-center"><i class="fas fa-times"></i></button>
                        <Card.Body className="body p-2">
                            <Card.Title className="mt-4">
                                <Link className="myLink">
                                    <h5 className="m-0">Digital Health in Motion</h5>
                                </Link>
                                <small className="text-secondary m-0">Tue, Dec 8, 4:00 pm</small> 
                            </Card.Title>
                            <Card.Text className="text mt-3">
                                <p className="text-secondary">909 attandances</p>
                            </Card.Text>
                            <Button id="main-button" variant="primary" className="mr-0 d-flex justify-content-center align-items-center">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '17rem', borderRadius: "10px", marginBottom: "0.8rem"}}>
                        <Card.Img className="zLessImg" variant="top" src="https://media-exp1.licdn.com/dms/image/C4E1EAQFtapAdxIcr6Q/event-background-image-shrink_200_800/0?e=1607162400&v=beta&t=pAB0sQaSahZ1kO0IT_nIx1RjhF3FyTb1Se6S5IjqIlY"
                        />
                        <img className="zTopImg" src="https://media-exp1.licdn.com/dms/image/C4E1EAQFg6B0ap5dUvQ/event-logo-shrink_200_200/0/1603975814539?e=1607162400&v=beta&t=InuUXkbSNLOo_WXs29NidfAJ1bjkZcjWwvyFu11vuHk" alt=""/>
                        <button id="close" className="d-flex justify-content-center align-items-center"><i class="fas fa-times"></i></button>
                        <Card.Body className="body p-2">
                            <Card.Title className="mt-4">
                                <Link className="myLink">
                                    <h5 className="m-0">ASIA-TECH Virtual 202...</h5>
                                </Link>
                                <small className="text-secondary m-0">Tue, Dec 8, 4:00 pm</small> 
                            </Card.Title>
                            <Card.Text className="text mt-3">
                                <p className="text-secondary">909 attandances</p>
                            </Card.Text>
                            <Button id="main-button" variant="primary" className="mr-0 d-flex justify-content-center align-items-center">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '17rem', borderRadius: "10px", marginBottom: "0.8rem"}}>
                        <Card.Img className="zLessImg" variant="top" src="https://media-exp1.licdn.com/dms/image/C561EAQHzTrn7rZ0n_g/event-background-image-shrink_200_800/0?e=1607162400&v=beta&t=JSEVKWKaMEDabZdUbW7OOiDUY6kTHHb3_flGLGLH_WY"
                        />
                        <img className="zTopImg" src="https://media-exp1.licdn.com/dms/image/C561EAQF-2a_xEfXzKw/event-logo-shrink_200_200/0?e=1607162400&v=beta&t=q-_RzIPBQLYjjeSSvJfKjgGS6_NrcsN9sKRrXho_HVQ" alt=""/>
                        <button id="close" className="d-flex justify-content-center align-items-center"><i class="fas fa-times"></i></button>
                        <Card.Body className="body p-2">
                            <Card.Title className="mt-4">
                                <Link className="myLink">
                                    <h5 className="m-0">Small and Advanced React...</h5>
                                </Link>
                                <small className="text-secondary m-0">Tue, Dec 8, 4:00 pm</small> 
                            </Card.Title>
                            <Card.Text className="text mt-3">
                                <p className="text-secondary">909 attandances</p>
                            </Card.Text>
                            <Button id="main-button" variant="primary" className="mr-0 d-flex justify-content-center align-items-center">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '17rem', borderRadius: "10px", marginBottom: "0.8rem"}}>
                        <Card.Img className="zLessImg" variant="top" src="https://media-exp1.licdn.com/dms/image/C4D1EAQH1j63LRNXbsQ/event-background-image-shrink_200_800/0?e=1607162400&v=beta&t=sTSyjKVqPKSdZvnDD6EYhF5ZJYumlfGPmb9hYV-ERsc"
                        />
                        <img className="zTopImg" src="https://media-exp1.licdn.com/dms/image/C4D1EAQGdNKrxKQRSCg/event-logo-shrink_200_200/0?e=1607162400&v=beta&t=WGOLt3ovkweCdG0IydT6EF-wGLrOLl4kBaEvSIDZ1RA" alt=""/>
                        <button id="close" className="d-flex justify-content-center align-items-center"><i class="fas fa-times"></i></button>
                        <Card.Body className="body p-2">
                            <Card.Title className="mt-4">
                                <Link className="myLink">
                                    <h5 className="m-0">Virtual Pipeline Summit ...</h5>
                                </Link>
                                <small className="text-secondary m-0">Tue, Dec 8, 4:00 pm</small> 
                            </Card.Title>
                            <Card.Text className="text mt-3">
                                <p className="text-secondary">909 attandances</p>
                            </Card.Text>
                            <Button id="main-button" variant="primary" className="mr-0 d-flex justify-content-center align-items-center">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '17rem', borderRadius: "10px", marginBottom: "0.8rem"}}>
                        <Card.Img className="zLessImg" variant="top" src="https://media-exp1.licdn.com/dms/image/C4D1EAQGr9ubO1OTSSQ/event-background-image-shrink_200_800/0?e=1607162400&v=beta&t=5MSfEiTKGY_9TNWGQPgqajAiDdlV03Y5TUk-PcGCE9U"
                        />
                        <img className="zTopImg" src="https://media-exp1.licdn.com/dms/image/C4D1EAQG3O9C5waTJbg/event-logo-shrink_400_400/0?e=1607162400&v=beta&t=WSelb8fVCyGCztfd9qpC148JK_8UuZJ_pB6nde7Sm2A" alt=""/>
                        <button id="close" className="d-flex justify-content-center align-items-center"><i class="fas fa-times"></i></button>
                        <Card.Body className="body p-2">
                            <Card.Title className="mt-4">
                                <Link className="myLink">
                                    <h5 className="m-0">Manufacturing Show 2021</h5>
                                </Link>
                                <small className="text-secondary m-0">Tue, Dec 8, 4:00 pm</small> 
                            </Card.Title>
                            <Card.Text className="text mt-3">
                                <p className="text-secondary">909 attandances</p>
                            </Card.Text>
                            <Button id="main-button" variant="primary" className="mr-0 d-flex justify-content-center align-items-center">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '17rem', borderRadius: "10px", marginBottom: "0.8rem"}}>
                        <Card.Img className="zLessImg" variant="top" src="https://media-exp1.licdn.com/dms/image/C4D1EAQGgrZI6dEgquQ/event-background-image-shrink_200_800/0?e=1607162400&v=beta&t=h4f1MBwr_AxXK0zVQRlC2lA57TZKfnbcMHYrPQL21i8"
                        />
                        <img className="zTopImg" src="https://media-exp1.licdn.com/dms/image/C4D1EAQFuZVwdMf3S6Q/event-logo-shrink_200_200/0?e=1607162400&v=beta&t=tAuKkGQCnTJWZ-UTfvSLhBBjZwO4ayK6ZlG7Jfz7ra8" alt=""/>
                        <button id="close" className="d-flex justify-content-center align-items-center"><i class="fas fa-times"></i></button>
                        <Card.Body className="body p-2">
                            <Card.Title className="mt-4">
                                <Link className="myLink">
                                    <h5 className="m-0">Atomico’s State of Europ...</h5>
                                </Link>
                                <small className="text-secondary m-0">Tue, Dec 8, 4:00 pm</small> 
                            </Card.Title>
                            <Card.Text className="text mt-3">
                                <p className="text-secondary">909 attandances</p>
                            </Card.Text>
                            <Button id="main-button" variant="primary" className="mr-0 d-flex justify-content-center align-items-center">View</Button>
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
        )
    }
}
