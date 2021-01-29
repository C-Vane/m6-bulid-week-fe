import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import AddModal from "../../components/AddModal";
import EditModal from "../../components/EditModal";
import ExperienceItem from "../../components/ExperienceItem";
import ExpEducationLoaders from "../../components/loaders/ExpEducationLoaders";
import { withRouter } from "react-router-dom";
import { getFunction, postFunction, putFunction, deleteFunction } from "../../components/CRUDFunctions";

class Experience extends Component {
  state = {
    editShow: false,
    addShow: false,
    experiences: [],
    currentexperience: {},
    loaded: false,
  };

  getExperience = async () => {
    const experience = await getFunction("profiles/" + this.props.userName + "/experience");
    if (experience) {
      setTimeout(() => {
        this.setState({ experiences: experience, loaded: true });
      }, 2000);
    } else {
      console.log(experience);
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getExperience();
    }, 1000);
  };
  componentDidUpdate = (prevProps) => {
    prevProps.userID !== this.props.userID && this.getExperience() && this.setState({ loaded: false });
  };

  putData = async (data) => {
    this.setState({ loaded: false });
    const response = await putFunction("profiles/" + this.props.userName + "/experience/" + this.state.currentexperience._id, data);
    console.log(response);
    if (response._id) {
      this.getExperience();
      this.setState({ currentexperience: {}, editShow: false });
    } else {
      console.log(response);
    }
  };
  addExperiencePost = async (data) => {
    const post = await postFunction("profiles/" + this.props.userName + "/experience", data);
    if (post._id) {
      this.getExperience();
      this.setState({ addShow: false });
    }
  };

  deleteExperience = async (id) => {
    const response = await deleteFunction("profiles/" + this.props.userName + "/experience/" + id);
    if (response) {
      this.getExperience();
      this.setState({ editShow: false });
    } else {
      console.log(response);
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
            <div className={pathname === "/profile/" + this.props.loggedUser ? "" : " userOnly"} onClick={() => this.addModalToggleHandler()} style={{ cursor: "pointer" }}>
              <i className='fas fa-plus'></i>
            </div>
          </div>
          <ListGroup>
            {this.state.loaded
              ? this.state.experiences.length > 0 &&
                this.state.experiences.map((exp, key) => (
                  <ExperienceItem
                    key={key}
                    experience={exp}
                    editModal={this.editModalToggleHandler}
                    userID={this.props.userID}
                    loggedUser={this.props.loggedUser}
                    getExperience={this.getExperience}
                    userName={this.props.userName}
                  />
                ))
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
            editExperiencePut={this.putData}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Experience);
