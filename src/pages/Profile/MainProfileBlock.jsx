import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import ProfilePicture from "../../assets/profilepicture.PNG";
import Highlights from "../../components/Highlights";
import LatestEducation from "./LatestEducation";
import LatestExperience from "./LatestExperience";
import About from "./About";
import MyLoader from "../../components/loaders/ContentLoader";
import ImageUploader from "react-images-upload";
import { withRouter } from "react-router-dom";
import { getFunction } from "../../components/CRUDFunctions";
function MainProfileBlock(props) {
  const [isMoreClicked, setIsMoreClicked] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [currentUserName, setCurrentUserName] = React.useState(props.userName);
  const [isFinishedLoading, setIsFinishedLoading] = React.useState(false);
  const [showProfilePictureUpload, setShowProfilePictureUpload] = React.useState(false);
  const [profilePictureUploadImg, setProfilePictureUploadImg] = React.useState([]);
  const [isImageUploading, setIsImageUploading] = React.useState(false);

  const fetchUserDataHandler = async (userName) => {
    const user = await getFunction("profile/user/" + userName);
    if (user._id) {
      setUserData(user);
    } else {
      console.log(user);
    }
  };

  const postProfilePictureHandler = async () => {
    setIsImageUploading(true);

    let formData = new FormData();
    let blob = new Blob([profilePictureUploadImg.pictures[0]], { type: "img/jpeg" });
    formData.append("profile", blob);

    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${props.loggedInUserName}/picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      setTimeout(() => {
        setIsImageUploading(false);
        setShowProfilePictureUpload(!showProfilePictureUpload);
        fetchUserDataHandler(currentUserName);
        window.location.reload();
      }, 1000);
    } catch (er) {
      console.log(er);
    }
  };

  const moreMenuHandler = () => {
    setIsMoreClicked(!isMoreClicked);
  };

  const showProfilePictureUploadHandler = () => {
    setShowProfilePictureUpload(!showProfilePictureUpload);
  };

  const profilePictureUploadHandler = (picture) => {
    setProfilePictureUploadImg({ pictures: picture });
  };

  React.useEffect(() => {
    setCurrentUserName(props.userName);
    fetchUserDataHandler(currentUserName);
    setIsFinishedLoading(true);
  }, []);

  React.useEffect(() => {
    setIsFinishedLoading(false);
    setCurrentUserName(props.userName);
    fetchUserDataHandler(props.userName);
  }, [props.userName]);
  const { pathname } = props.location;
  return (
    <>
      <div
        className='pt-5 pb-3'
        onClick={() => {
          isMoreClicked && setIsMoreClicked(false);
        }}
      >
        <Card id='profile-main' className='mt-5'>
          <div className='profile-background-container'>
            <div
              className='profile-background-picture'
              style={{
                background: `url(${ProfilePicture})`,
              }}
            ></div>
          </div>
          {showProfilePictureUpload && (
            <div className='profile-picture-upload-container swing-in-top-fwd'>
              <h4 className='font-weight-normal'>Upload Image</h4>
              {isImageUploading ? (
                <div className='w-100 py-5 d-flex flex-column align-items-center justify-content-center'>
                  <p className='font-weight-bold mr-2 mb-3'>Uploading...</p>
                  <Spinner variant='primary' animation='border' role='status' />
                </div>
              ) : (
                <>
                  <ImageUploader
                    withIcon={true}
                    buttonText='Upload image'
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    singleImage={true}
                    withPreview={true}
                    withLabel={false}
                    onChange={profilePictureUploadHandler}
                  />
                  <div className='d-flex justify-content-end align-items-center' style={{ height: 40 }}>
                    <Button variant='outline-secondary' className='rounded-pill mr-2' onClick={showProfilePictureUploadHandler}>
                      Cancel
                    </Button>
                    <Button variant='primary' className='rounded-pill' style={{ width: 160 }} onClick={postProfilePictureHandler}>
                      Save Changes
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
          <Card.Body className='d-flex justify-content-between px-4 py-3 mb-3'>
            {isFinishedLoading ? (
              <>
                <div className='profile-left w-75'>
                  <div className='profile-photo d-flex align-items-end justify-content-center' style={{ background: `url(${userData.image})` }}>
                    {props.loggedInUserName === currentUserName && (
                      <div className={pathname === "/profile/5fc4c48fed266800170ea3d8" ? "profile-picture-edit-btn" : "profile-picture-edit-btn userOnly"} onClick={showProfilePictureUploadHandler}>
                        <i className='fas fa-pen'></i>
                      </div>
                    )}
                  </div>

                  <h3 className='d-inline-block mr-2'>
                    {userData.name} {userData.surname}
                  </h3>
                  <h4 className='d-inline-block mb-0 font-weight-light'> - 1st</h4>
                  <h4 className='font-weight-light'>{userData.title}</h4>
                  <Card.Text>
                    {userData.area} - 500+ connections -{" "}
                    <a href='#!' className='font-weight-bold' onClick={props.contactInfoHandler}>
                      Contact info
                    </a>
                  </Card.Text>
                </div>
                <div className='profile-right w-50 text-right'>
                  <div className='profile-button-container d-flex align-items-center justify-content-end mb-4'>
                    <Button className='mr-2 px-4 rounded-pill font-weight-bold' variant='primary'>
                      Connect
                    </Button>
                    <Button className='mr-2 px-4 rounded-pill font-weight-bold' variant='outline-primary'>
                      Message
                    </Button>
                    <Button className='px-4 rounded-pill font-weight-bold' variant='outline-secondary' onClick={moreMenuHandler}>
                      More...
                    </Button>
                    {isMoreClicked && (
                      <div className='profile-more-menu'>
                        <ul>
                          <li>
                            <a href='#!'>
                              <i className='fas fa-paper-plane mr-4'></i>Share profile in a message
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fas fa-download mr-4'></i>Save to PDF
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fas fa-plus mr-4'></i>Follow
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fas fa-flag mr-4'></i>Report/Block
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className='d-flex flex-column align-items-end text-left'>
                    <LatestExperience />
                    <LatestEducation />
                    <div className='latest-experience'></div>
                  </div>
                </div>
              </>
            ) : (
              <MyLoader />
            )}
          </Card.Body>
        </Card>
        <Highlights />
        <About aboutData={userData.bio} isFinishedLoading={isFinishedLoading} />
      </div>
    </>
  );
}

export default withRouter(MainProfileBlock);
