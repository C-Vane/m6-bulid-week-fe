import React from "react";
import { Card, Button, Spinner, Modal } from "react-bootstrap";
import ProfilePicture from "../../assets/profilepicture.PNG";
import Highlights from "../../components/Highlights";
import LatestEducation from "./LatestEducation";
import LatestExperience from "./LatestExperience";
import About from "./About";
import MyLoader from "../../components/loaders/ContentLoader";
import ImageUploader from "react-images-upload";
import { withRouter } from "react-router-dom";
import { deleteFunction, getDocument, getFunction, postFunctionImage, putFunction } from "../../components/CRUDFunctions";
import EditProfile from "../../components/EditModalProfile";

function MainProfileBlock(props) {
  const [isMoreClicked, setIsMoreClicked] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [currentUserName, setCurrentUserName] = React.useState(props.userName);
  const [isFinishedLoading, setIsFinishedLoading] = React.useState(false);
  const [showProfilePictureUpload, setShowProfilePictureUpload] = React.useState(false);
  const [showBackgroundPictureUpload, setShowBackgroundPictureUpload] = React.useState(false);
  const [profilePictureUploadImg, setProfilePictureUploadImg] = React.useState([]);
  const [isImageUploading, setIsImageUploading] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const fetchUserDataHandler = async (userName) => {
    const endp = userName === props.loggedInUser.split("#")[0] ? "profile/user/u" : "profile/" + userName;
    const user = await getFunction(endp);

    if (user._id) {
      setUserData(user);
      setIsFinishedLoading(true);
    } else {
      console.log(user);
    }
  };

  const postProfilePictureHandler = async () => {
    setIsImageUploading(true);
    let formData = new FormData();
    let blob = new Blob([profilePictureUploadImg.pictures[0]], { type: "img/jpeg" });
    formData.append("image", blob);
    const endp = !showBackgroundPictureUpload ? "profile/" + userData._id + "/picture" : "profile/" + userData._id + "/picture?background=true";
    const response = await postFunctionImage(endp, formData);
    if (response._id) {
      setTimeout(() => {
        setIsImageUploading(false);
        setShowProfilePictureUpload(false);
        setShowBackgroundPictureUpload(false);
        setUserData(response);
      }, 1000);
    }
  };
  const savePDF = async () => {
    const data = await getDocument("profile/" + userData._id + "/CV", "CV.pdf");
    console.log(data);
  };
  const saveCSV = async () => {
    const data = await getDocument("profiles/" + currentUserName + "/experiences/CSV", "Experinece.PDF");
    console.log(data);
  };
  const moreMenuHandler = () => {
    setIsMoreClicked(!isMoreClicked);
  };

  const profilePictureUploadHandler = (picture) => {
    setProfilePictureUploadImg({ pictures: picture });
  };
  const deleteAcc = async (id) => {
    const response = await deleteFunction("profile/" + id);
    if (response.ok) {
      setEditModal(false);
      localStorage.clear();
      window.location.replace("/");
    } else {
      console.log(response);
    }
  };

  const editprofilePut = async (profile) => {
    const response = await putFunction("profile/" + profile._id, profile);
    console.log(profile);
    if (response) {
      setUserData(response);
      setEditModal(false);
    } else {
      console.log(response);
    }
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
                background: `url(${userData.background})`,
              }}
            ></div>
            {props.loggedInUser === currentUserName && (
              <div
                className='profile-picture-edit-btn '
                onClick={() => {
                  setShowBackgroundPictureUpload(true);
                  setShowProfilePictureUpload(true);
                }}
              >
                <i className='fas fa-pen'></i>
              </div>
            )}
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
                    <Button
                      variant='outline-secondary'
                      className='rounded-pill mr-2'
                      onClick={() => {
                        setShowBackgroundPictureUpload(false);
                        setShowProfilePictureUpload(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button variant='primary' className='rounded-pill' style={{ width: 160 }} onClick={() => postProfilePictureHandler()}>
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
                    {props.loggedInUser === currentUserName && (
                      <div className='profile-picture-edit-btn ' onClick={() => setShowProfilePictureUpload(true)}>
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
                            <a onClick={savePDF}>
                              <i className='fas fa-download mr-4'></i>Save Profile as PDF
                            </a>
                          </li>
                          <li>
                            <a onClick={saveCSV}>
                              <i className='fas fa-download mr-4'></i>Save Experiences as CSV
                            </a>
                          </li>
                          {props.loggedInUser !== currentUserName ? (
                            <>
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
                            </>
                          ) : (
                            <>
                              <li>
                                <a href='#!' onClick={() => setEditModal(true)}>
                                  <i className='fas fa-pen mr-4'></i>Edit
                                </a>
                              </li>
                              <li>
                                <a href='#!' onClick={() => setDeleteModal(true)}>
                                  <i className='fas fa-trash-alt mr-4'></i>Delete Account
                                </a>
                              </li>
                            </>
                          )}
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
        <Modal show={deleteModal} onHide={() => setDeleteModal(false)}>
          <Modal.Header closeButton onClick={() => setDeleteModal(false)}>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Are you sure you want to delete your Account?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='success' className='px-5' onClick={() => setDeleteModal(false)}>
              No
            </Button>
            <Button
              variant='danger'
              className='px-5'
              onClick={() => {
                deleteAcc(userData._id);
                setTimeout(() => {
                  setDeleteModal(false);
                }, 500);
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        {editModal && <EditProfile show={true} profile={userData} editprofilePut={editprofilePut} deleteprofile={deleteAcc} editModalToggleHandler={() => setEditModal(false)} />}
      </div>
    </>
  );
}

export default withRouter(MainProfileBlock);
