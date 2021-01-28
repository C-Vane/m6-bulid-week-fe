import React from "react";
import { Link } from "react-router-dom";
import { getFunction } from "../../components/CRUDFunctions";
import PeopleLoaders from "../../components/loaders/PeopleLoaders";
import "./SideBar.css";

class SideBar extends React.Component {
  state = {
    connectionsArray: [],
    connectionsArraySpliced: [],
    fetchConnectionsIndex: 0,
    peopleYouMayKnow: [],
    peopleYouMayKnowSpliced: [],
    fetchPeopleYouKnowIndex: 0,
  };

  getData = async (nameofarray, nameofsplicedarray) => {
    const data = await getFunction("profile/");
    console.log(data);
    if (data) {
      this.setState({
        [nameofarray]: data,
        [nameofsplicedarray]: data.splice(0, 6),
      });
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getData("connectionsArray", "connectionsArraySpliced");
      this.getData("peopleYouMayKnow", "peopleYouMayKnowSpliced");
    }, 1000);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.fetchConnectionsIndex !== prevState.fetchConnectionsIndex) {
      if (this.state.fetchConnectionsIndex > this.state.connectionsArray.length) {
        this.setState({ fetchConnectionsIndex: 0 });
      }
    }

    if (this.state.fetchPeopleYouKnowIndex !== prevState.fetchPeopleYouKnowIndex) {
      if (this.state.fetchPeopleYouKnowIndex > this.state.peopleYouMayKnow.length) {
        this.setState({ fetchPeopleYouKnowIndex: 0 });
      }
    }
  };

  showMoreConnectionsHandler = (valueA) => {
    this.setState({ fetchConnectionsIndex: valueA + 6 });
    this.setState({
      connectionsArraySpliced: [...this.state.connectionsArray].splice(this.state.fetchConnectionsIndex, 6),
    });
  };

  showMorePeopleYouKnowHandler = (valueA) => {
    this.setState({ fetchPeopleYouKnowIndex: valueA + 6 });
    this.setState({
      peopleYouMayKnowSpliced: [...this.state.peopleYouMayKnow].splice(this.state.fetchPeopleYouKnowIndex, 6),
    });
  };

  render() {
    return (
      <div id='sidebar-main-container'>
        <div className='side-bar w-100 pt-5 pb-3 mt-5'>
          <div className='side mb-3'>
            <div className='pt-3 pb-1 px-4'>
              <h4 className='font-weight-normal mb-2'>People also viewed</h4>
              {this.state.connectionsArray
                ? this.state.connectionsArraySpliced.map((people, index) => (
                    <div key={index} className='d-flex justify-content-between mb-2 py-3 brdr-bottom'>
                      <div className='d-flex'>
                        <Link to={`/profile/${people.username}`} className='d-flex myLink'>
                          <img className='image mr-3' src={people.image} alt='user-img' />
                          <div className='d-flex flex-column'>
                            <div className='name text-nowrap'>
                              <p className='font-weight-bold mb-0' style={{ width: "95%" }}>
                                {people.name + " " + people.surname}
                              </p>
                            </div>
                            <p className='font-weight-light mb-0'>1st</p>
                            <p className='mb-0'>{people.title}</p>
                          </div>
                        </Link>
                      </div>
                      <button className='d-flex justify-content-center align-items-center'>
                        <i className='fas fa-paper-plane'></i>
                      </button>
                    </div>
                  ))
                : Array.from({ length: 6 }, (_, i) => i + 1).map((n) => <PeopleLoaders key={n} />)}
            </div>
            <div className='text-center'>
              <div className='see-all-btn font-weight-bold d-block py-2 brdr-top' onClick={() => this.showMoreConnectionsHandler(this.state.fetchConnectionsIndex)} style={{ cursor: "pointer" }}>
                Show More
              </div>
            </div>
          </div>

          <div className='side w-100 mb-3'>
            <div className='pt-3 pb-1 px-4'>
              <h4 className='font-weight-normal mb-4'>People you may know</h4>
              {this.state.connectionsArray
                ? this.state.peopleYouMayKnowSpliced.map((people, index) => (
                    <div key={index} className='d-flex justify-content-between mb-2 pb-3 brdr-bottom'>
                      <div className='d-flex'>
                        <Link to={`/profile/${people.username}`} className='d-flex myLink'>
                          <img className='image mr-3' src={people.image} alt='user-img' />
                          <div className='d-flex flex-column'>
                            <div className='name text-nowrap'>
                              <p className='mb-0'>{people.name + " " + people.surname}</p>
                            </div>
                            <p className='font-weight-light mb-0'>1st</p>
                            <p className='mb-0'>{people.title}</p>
                          </div>
                        </Link>
                      </div>
                      <button className='d-flex justify-content-center align-items-center'>
                        <i className='fas fa-user-plus'></i>
                      </button>
                    </div>
                  ))
                : Array.from({ length: 6 }, (_, i) => i + 1).map((n) => <PeopleLoaders key={n} />)}
            </div>
            <div className='text-center'>
              <div
                to='/'
                className='see-all-btn font-weight-bold d-block py-2 brdr-top'
                onClick={() => this.showMorePeopleYouKnowHandler(this.state.fetchPeopleYouKnowIndex)}
                style={{ cursor: "pointer" }}
              >
                Show More
              </div>
            </div>
          </div>

          <div id='learning-sidebar-main' className='side w-100 '>
            <div className='pt-3 pb-1 px-4'>
              <div className='d-flex align-items center mb-2'>
                <i className='fab fa-linkedin mr-1'></i>
                <span className='learning-title font-weight-bold'>LEARNING</span>
              </div>
              <p>Add new skills with these courses</p>
              <div className='d-flex justify-content-start align-items-start mb-3'>
                <div className='mr-2'>
                  <div className='video-placeholder'></div>
                </div>
                <div>
                  <p className='font-weight-bold mb-1'>Video title</p>
                  <small>21,000 viewers</small>
                </div>
              </div>
              <div className='d-flex justify-content-start align-items-start mb-3'>
                <div className='mr-2'>
                  <div className='video-placeholder'></div>
                </div>
                <div>
                  <p className='font-weight-bold mb-1'>Video title 2</p>
                  <small>54,000 viewers</small>
                </div>
              </div>
              <div className='d-flex justify-content-start align-items-start mb-3'>
                <div className='mr-2'>
                  <div className='video-placeholder'></div>
                </div>
                <div>
                  <p className='font-weight-bold mb-1'>Video title 3</p>
                  <small>36,000 viewers</small>
                </div>
              </div>
              <div className='d-flex justify-content-start align-items-start mb-3'>
                <div className='mr-2'>
                  <div className='video-placeholder'></div>
                </div>
                <div>
                  <p className='font-weight-bold mb-1'>Video title 4</p>
                  <small>61,000 viewers</small>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <Link to='/learning'>
                <div className='see-all-btn font-weight-bold d-block py-2 brdr-top' style={{ cursor: "pointer" }}>
                  Show more on LinkedIn Learning
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SideBar;
