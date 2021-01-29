import React, { Component } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";
import { getFunction } from "../../components/CRUDFunctions";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Experience userName={this.props.userName} loggedUser={this.props.loggedUser} />
        <Education />
        <Skills />
        <Interests />
      </div>
    );
  }
}
