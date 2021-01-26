import React from "react";
import Moment from "react-moment";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { withRouter } from "react-router-dom";

const ExperienceItem = (props) => {
  const [isUploadWindowOpen, setIsUploadWindowOpen] = React.useState(false);
  const [experienceImage, setExperienceImage] = React.useState();
  const [imageUpload, setImageUpload] = React.useState();
  const [imageUploadingLoader, setImageUploadingLoader] = React.useState(false);

  const fetchExperienceImage = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userID}/experiences/${props.experience._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
          },
        }
      );
      let data = await response.json();
      setExperienceImage(data.image);
    } catch (er) {
      console.log(er);
    }
  };

  const postProfilePictureHandler = async () => {
    setImageUploadingLoader(true);
    let formData = new FormData();
    let blob = new Blob([imageUpload[0]], { type: "img/jpeg" });
    formData.append("experience", blob);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userID}/experiences/${props.experience._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
          },
        }
      );
      setTimeout(() => {
        setImageUploadingLoader(false);
        fetchExperienceImage();
        openUploadWindowHandler();
      }, 1000);
    } catch (er) {
      console.log(er);
    }
  };

  const openUploadWindowHandler = () => {
    setIsUploadWindowOpen(!isUploadWindowOpen);
  };

  const profilePictureUploadHandler = (picture) => {
    setImageUpload(picture);
  };

  React.useEffect(() => {
    fetchExperienceImage();
  }, []);
  const { pathname } = props.location;
  return (
    <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between brdr-bottom">
      <div className="d-flex align-items-start">
        <div className="expImgPlace mr-4" style={{ background: `url(${experienceImage})` }}>
          {props.userID === "5fc4c48fed266800170ea3d8" && (
            <div className={pathname === "/profile/5fc4c48fed266800170ea3d8" ? "experience-imgupload-container" : "experience-imgupload-container userOnly"} onClick={openUploadWindowHandler}>
              <i className="fas fa-upload "></i>
            </div>
          )}
        </div>
        {isUploadWindowOpen && (
          <div className="upload-container swing-in-top-fwd">
            <h5 className="font-weight-normal">Upload Image</h5>
            {imageUploadingLoader ? (
              <div className="w-100 py-5 d-flex flex-column align-items-center justify-content-center">
                <p className="font-weight-bold mr-2 mb-3">Uploading...</p>
                <Spinner variant="primary" animation="border" role="status" />
              </div>
            ) : (
                <>
                  <ImageUploader
                    withIcon={true}
                    buttonText="Upload image"
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    singleImage={true}
                    withPreview={true}
                    withLabel={false}
                    onChange={profilePictureUploadHandler}
                  />
                  <div className="d-flex justify-content-center align-items-center" style={{ height: 40 }}>
                    <Button
                      variant="outline-secondary"
                      className="rounded-pill mr-2"
                      onClick={openUploadWindowHandler}
                      style={{ width: "40%" }}
                    >
                      Cancel
                  </Button>
                    <Button
                      variant="primary"
                      className="rounded-pill"
                      style={{ width: "60%" }}
                      onClick={postProfilePictureHandler}
                    >
                      Save Changes
                  </Button>
                  </div>
                </>
              )}
          </div>
        )}
        <div className="d-flex flex-column">
          <h5 className="mb-0 font-weight-normal">{props.experience.role}</h5>
          <p className="mb-0 ">{props.experience.company}</p>
          <p className="mb-0 font-weight-light">
            <Moment format="MMM YYYY">{props.experience.startDate}</Moment> -{" "}
            <Moment format="MMM YYYY">{props.experience.endDate}</Moment>
          </p>
          <small className="font-weight-light">{props.experience.area}</small>
        </div>
      </div>
      <div className={pathname === "/profile/5fc4c48fed266800170ea3d8" ? "" : " userOnly"} onClick={() => props.editModal(props.experience)} style={{ cursor: "pointer" }}>
        <i className="fas fa-pen "></i>
      </div>
    </ListGroup.Item>
  );
};

export default withRouter(ExperienceItem);
