import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import AddModal from "../../components/AddModal";
import EditModal from "../../components/EditModal";
import ExperienceItem from "../../components/ExperienceItem";
import ExpEducationLoaders from "../../components/loaders/ExpEducationLoaders";
import { withRouter } from "react-router-dom";
import { deleteFunction, getFunction, postFunction, postFunctionImage, putFunction } from "../../components/CRUDFunctions";

class Experience extends Component {
  state = {
    editShow: false,
    addShow: false,
    experiences: [],
    currentexperience: {},
    loaded: false,
  };



  getExperience = async ()  => {
    const experience= await getFunction("profiles/"+this.props.userName+"/experience");
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


  putData = async (experiences) => {
    this.setState({ editShow: false });
    experiences !== undefined && experiences.preventDefault();
      const response = await putFunction( this.props.userName+"experience/"+this.props.expId)
      if (response) {
        this.getExperience();
        experiences.text = " ";
      } else {
        console.log(response);
      }
    
  };

  postData = async () => {
    this.setState({ addShow: false });
    let data = { ...this.state.currentexperience, expId: this.props.expId};
    const response = await postFunction(this.props.userName+"/experience", data)
    try {
      if (response.ok) {
        this.getExperience();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };


  deletePost = async (id) => {
    this.setState({ editShow: false });
    const response = await deleteFunction("profiles/"+this.props.userName+"/experience" + id);
    if (response) {
      this.getPosts();
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
