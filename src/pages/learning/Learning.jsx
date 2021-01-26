import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

class Learning extends Component {
  render() {
    return (
      <>
        <div className=" mb-0  pt-5 mt-3 text-secondary d-flex justify-content-end ">
          <p className="font-weight-bold mr-3 mb-0 ">Business</p>
          <p className="font-weight-bold mr-3 mb-0">Higher Education</p>
          <p className="font-weight-bold mr-3 brdr-right mb-0 pr-3">
            Government
          </p>
          <p className="font-weight-bold mr-3 mb-0">Buy For my team</p>
        </div>

        <div className=" banner-learning-contain mt-2"></div>
        <Container className="mt-1 ">
          <div className=" reactPlayer-conatin">
            <div>
              <p className="font-weight-bold ml-4 pt-5  mb-0">
                Top picks For you
              </p>
            </div>
            <div className="d-flex mt-2 reactPlayer-conatin justify-content-center">
              <div className=" justify-content-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <ReactPlayer
                      controls
                      width="250px"
                      height="250px"
                      url="https://www.youtube.com/watch?v=N3AkSS5hXMA"
                    />
                    <Card.Title>React Basics</Card.Title>
                    <Card.Text>by:Shaun Wassel</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="mr-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <ReactPlayer
                      controls
                      width="250px"
                      height="250px"
                      url="https://www.youtube.com/watch?v=Ke90Tje7VS0"
                    />
                    <Card.Title>React for Beginners</Card.Title>
                    <Card.Text>by:Mosh hamedani</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="mr-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <ReactPlayer
                      controls
                      width="250px"
                      height="250px"
                      url="https://www.youtube.com/watch?v=6oFuwhIibo4"
                    />
                    <Card.Title>what is React Native?</Card.Title>
                    <Card.Text>by:Mosh hamedani</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="mr-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <ReactPlayer
                      controls
                      width="250px"
                      height="250px"
                      url="https://www.youtube.com/watch?v=i8xsbYgMiBs"
                    />
                    <Card.Title>React Vs Angular</Card.Title>
                    <Card.Text>by:Mosh hamedani</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
export default Learning;
