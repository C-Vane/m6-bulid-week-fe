import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import AddModal from "../../components/AddModal";
import EditModal from "../../components/EditModal";
import ExperienceItem from "../../components/ExperienceItem";
import ExpEducationLoaders from "../../components/loaders/ExpEducationLoaders";
import { withRouter } from "react-router-dom";

class Experience extends Component {
  state = {
    editShow: false,
    addShow: false,
    experiences: [],
    currentexperience: {},
    loaded: false,
  };

  getExperienceFetcher = async () => {
    let url = "https://striveschool-api.herokuapp.com/api/profile/" + this.props.userID + "/experiences";
    try {
      const response = await fetch(url, {
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        const result = await response.json();
        this.setState({ experiences: result, loaded: true });
      } else {
        console.log(response);
        this.setState({ loaded: true });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loaded: true });
    }
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.getExperienceFetcher();
    }, 1000);
  };
  componentDidUpdate = (prevProps) => {
    prevProps.userID !== this.props.userID && this.getExperienceFetcher() && this.setState({ loaded: false });
  };
  editExperiencePut = async (experiences) => {
    this.setState({ editShow: false });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences/" + experiences._id, {
        method: "PUT",
        body: JSON.stringify(experiences),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        this.getExperienceFetcher();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  addExperiencePost = async (exp) => {
    this.setState({ addShow: false });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences", {
        method: "POST",
        body: JSON.stringify(exp),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        this.getExperienceFetcher();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  deleteExperience = async (id) => {
    this.setState({ editShow: false });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      if (response.ok) {
        this.getExperienceFetcher();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  addModalToggleHandler = () => {
    this.state.addShow ? this.setState({ addShow: false }) : this.setState({ addShow: true });
  };
  editModalToggleHandler = (e) => {
    this.state.editShow ? this.setState({ editShow: false }) : this.setState({ editShow: true, currentexperience: e });
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <div id='experience-main-container' className='experience-contain mb-0'>
          <div className='d-flex align-items-center justify-content-between mr-2'>
            <h4 className='font-weight-normal'>Experience</h4>
            <div className={pathname === "/profile/5fc4c48fed266800170ea3d8" ? "" : " userOnly"} onClick={() => this.addModalToggleHandler()} style={{ cursor: "pointer" }}>
              <i className='fas fa-plus'></i>
            </div>
          </div>
          <ListGroup>
            {this.state.loaded
              ? this.state.experiences.length > 0 &&
                this.state.experiences.map((exp, key) => <ExperienceItem key={key} experience={exp} editModal={this.editModalToggleHandler} userID={this.props.userID} />)
              : Array.from({ length: 4 }, (_, i) => i + 1).map((n) => <ExpEducationLoaders key={n} />)}
          </ListGroup>
        </div>

        {this.state.addShow && <AddModal show={true} addExperiencePost={this.addExperiencePost} addModalToggleHandler={() => this.addModalToggleHandler()} />}
        {this.state.editShow && (
          <EditModal
            show={true}
            deleteExperience={this.deleteExperience}
            editModalToggleHandler={() => this.editModalToggleHandler()}
            experience={this.state.currentexperience}
            editExperiencePut={this.editExperiencePut}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Experience);
