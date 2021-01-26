import React, { Component } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";

export default class Main extends Component {
  state = { profile: {} };

  fetcher = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzVlMGVkMjY2ODAwMTcwZWEzZGMiLCJpYXQiOjE2MDY3MzEyMzMsImV4cCI6MTYwNzk0MDgzM30.8dIOQ4c_SEmlt4usGkxACHqgxOYcvoY2KyXESe9vgyM",
        }),
      });
      const result = await response.json();
      if (response.ok) {
        this.setState({ profile: result });
      } else {
      }
    } catch (e) {}
  };
  componentDidMount = () => {
    this.fetcher();
  };

  render() {
    return (
      <div>
        <Experience userID={this.props.userID} />
        <Education />
        <Skills />
        <Interests />
      </div>
    );
  }
}
