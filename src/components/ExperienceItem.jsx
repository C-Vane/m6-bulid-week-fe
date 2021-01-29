import React from "react";
import Moment from "react-moment";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { withRouter } from "react-router-dom";
import { postFunctionImage } from "./CRUDFunctions";

const ExperienceItem = (props) => {
  const [isUploadWindowOpen, setIsUploadWindowOpen] = React.useState(false);
  const [imageUpload, setImageUpload] = React.useState();
  const [imageUploadingLoader, setImageUploadingLoader] = React.useState(false);

  const imagePost = async () => {
    setImageUploadingLoader(true);
    let formData = new FormData();
    let blob = new Blob([imageUpload[0]], { type: "img/jpeg" });
    formData.append("image", blob);
    console.log(formData);
    const response = await postFunctionImage("profiles/" + props.userName + "/experience/" + props.experience._id + "/picture", formData);
    console.log(response);
    if (response._id) {
      setImageUploadingLoader(false);
      setIsUploadWindowOpen(false);
      props.getExperience();
    } else console.log(response);
  };

  const openUploadWindowHandler = () => {
    setIsUploadWindowOpen(!isUploadWindowOpen);
  };

  const profilePictureUploadHandler = (picture) => {
    setImageUpload(picture);
  };

  return (
    <>
      <ListGroup.Item variant='light' className='d-flex align-items-center justify-content-between brdr-bottom'>
        <div className='d-flex align-items-start'>
          <div className='expImgPlace mr-4' style={{ background: `url(${props.experience.image})` }}>
            {props.userName === props.loggedUser && (
              <div className='experience-imgupload-container' onClick={openUploadWindowHandler}>
                <i className='fas fa-upload '></i>
              </div>
            )}
          </div>
          {isUploadWindowOpen && (
            <div className='upload-container swing-in-top-fwd'>
              <h5 className='font-weight-normal'>Upload Image</h5>
              {imageUploadingLoader ? (
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
                  <div className='d-flex justify-content-center align-items-center' style={{ height: 40 }}>
                    <Button variant='outline-secondary' className='rounded-pill mr-2' onClick={openUploadWindowHandler} style={{ width: "40%" }}>
                      Cancel
                    </Button>
                    <Button variant='primary' className='rounded-pill' style={{ width: "60%" }} onClick={imagePost}>
                      Save Changes
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
          <div className='d-flex flex-column'>
            <h5 className='mb-0 font-weight-normal'>{props.experience.role}</h5>
            <p className='mb-0 '>{props.experience.company}</p>
            <p className='mb-0 font-weight-light'>
              <Moment format='MMM YYYY'>{props.experience.startDate}</Moment> -{props.experience.endDate ? <Moment format='MMM YYYY'>{props.experience.endDate}</Moment> : <span>Present</span>}
            </p>
            <small className='font-weight-light'>{props.experience.area}</small>
          </div>
          {props.userName === props.loggedUser && (
            <div onClick={() => props.editModal(props.experience)} style={{ cursor: "pointer" }}>
              <i className='fas fa-pen '></i>
            </div>
          )}
        </div>
      </ListGroup.Item>
    </>
  );
};

export default withRouter(ExperienceItem);
