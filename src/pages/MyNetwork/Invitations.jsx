import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Invitations.css";
import InvitationsLoader from "../../components/loaders/InvitationsLoader";
import { getFunction } from "../../components/CRUDFunctions";

export default class Invitations extends Component {
  state = {
    myInfo: [],
    myInfoSpliced: [],
    showMore: false,
    myShow: true,
  };

  getInfo = async () => {
    const info = await getFunction("profile/");

    if (info) {
      this.setState({
        myInfo: info,
        myInfoSpliced: info.splice(0, info.length > 6 ? 6 : info.length - 1),
      });
    } else {
      console.log("error occured");
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getInfo();
    }, 1000);
  };
  showMoreHandler = () => {
    this.state.showMore ? this.setState({ showMore: false, myShow: true }) : this.setState({ showMore: true, myShow: false });
  };

  render() {
    const { myInfo, myInfoSpliced } = this.state;
    return (
      <div className='p-0 border mt-5' id='invitations'>
        {/* {Array.from({ length: 1 }, (_, i) => i + 1).map((e, index) => <InvitationsLoader key={index}/>)} */}
        <div className='top d-flex justify-content-between pl-3 py-2'>
          <h5>Invitations</h5>
          <button className='ignore d-flex justify-content-center align-items-center mr-2' style={{ width: "6rem" }} onClick={() => this.showMoreHandler()} id='see-all-btn'>
            {this.state.myShow ? "See all 6" : ""}
          </button>
        </div>

        <div className='info'>
          {this.state.myInfo.length > 0
            ? myInfoSpliced.map((personIMayKnow, index) => {
                if (index < 3) {
                  console.log("a");

                  return (
                    <div key={index} className='d-flex justify-content-between brdr-top py-2 mb-2'>
                      <div className='d-flex myLink'>
                        <img className='image mx-3' src={personIMayKnow.image} alt='user-img' id='profile-img' />
                        <div className='d-flex flex-column'>
                          <div className='name'>
                            <Link to={`/profile/${personIMayKnow._id}`}>
                              <p className='mb-0'>
                                {personIMayKnow.name} {personIMayKnow.surname}
                              </p>
                            </Link>
                          </div>
                          <p className='mb-0 text-secondary'>{personIMayKnow.title}</p>
                          <p className='font-weight-light mb-0 text-secondary'>
                            <i className='fas fa-infinity mr-1' />
                            Alessia Luminari and 6 others
                          </p>
                        </div>
                      </div>
                      <div className='d-flex'>
                        <button className='ignore mr-1 d-flex justify-content-center align-items-center'>Ignore</button>
                        <button id='accept' className='d-flex justify-content-center align-items-center mr-3'>
                          Accept
                        </button>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className={this.state.showMore ? "d-flex justify-content-between brdr-top py-2 my-2" : "d-none"}>
                      <div className='d-flex myLink'>
                        <img className='image mx-3' src={personIMayKnow.image} alt='user-img' id='profile-img' />
                        <div className='d-flex flex-column'>
                          <div className='name'>
                            <Link to={`/profile/${personIMayKnow._id}`}>
                              <p className='mb-0'>
                                {personIMayKnow.name} {personIMayKnow.surname}
                              </p>
                            </Link>
                          </div>
                          <p className='mb-0 text-secondary'>{personIMayKnow.title}</p>
                          <p className='font-weight-light mb-0 text-secondary'>
                            <i className='fas fa-infinity mr-1' />
                            Alessia Luminari and 6 others
                          </p>
                        </div>
                      </div>
                      <div className='d-flex'>
                        <button className='ignore mr-1 d-flex justify-content-center align-items-center'> Ignore</button>
                        <button id='accept' className='d-flex justify-content-center align-items-center mr-3'>
                          Accept
                        </button>
                      </div>
                    </div>
                  );
                }
              })
            : Array.from({ length: 3 }, (_, i) => i + 1).map((e, index) => <InvitationsLoader class='w-100 ml-3' key={index} />)}
        </div>
        <div className='text-center brdr-top'>
          <div to='/' className='see-all-btn font-weight-bold d-block py-2' style={{ cursor: "pointer" }} onClick={() => this.showMoreHandler()}>
            {this.state.myShow ? "Show more" : "Show less"}
          </div>
        </div>
      </div>
    );
  }
}
