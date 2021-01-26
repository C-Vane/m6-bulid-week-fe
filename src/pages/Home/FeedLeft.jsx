import React from "react";
import ProfilePicture from "../../assets/profilepicture.PNG";
import { Link } from "react-router-dom";

function FeedLeft(props) {
  return (
    <>
      <div className='feed-left-container mb-3'>
        <div className='feed-profile-picture-container'>
          <div className='feed-profile-picture-bg' style={{ background: `url(${ProfilePicture})` }}></div>
          <p className='feed-profile-premium-tag'>PREMIUM</p>
        </div>

        <div className='text-center'>
          <Link
            to={`/profile/${props.userID}`}
            className='feed-profile-picture-photo mx-auto'
            style={{
              height: 72,
              width: 72,
              borderRadius: 36,
              background: `url(${props.profilePicture})`,
              border: "3px solid #fff",
            }}
          ></Link>

          <Link to={`/profile/${props.userID}`} className='feed-profile-link brdr-bottom-strict pb-3'>
            <h6 className='mb-0'>{props.name}</h6>
            <p className='mb-0'>{props.jobTitle}</p>
          </Link>
        </div>

        <div className='brdr-bottom-strict py-3'>
          <Link to='/' className='profile-link d-flex flex-column justify-content-center px-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='grey-text mb-0'>Connections</p>
              <p className='blue-text mb-0'>30</p>
            </div>
            <div className='d-block'>
              <p className='font-weight-bold d-block mb-0'>Grow your network</p>
            </div>
          </Link>
          <Link to='/' className='profile-link d-flex flex-column justify-content-center px-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='grey-text mb-0'>Who viewed your profile</p>
              <p className='blue-text mb-0'>13</p>
            </div>
          </Link>
        </div>
        <div className='brdr-bottom-strict'>
          <Link to='/' className='profile-link d-flex flex-column justify-content-center px-3'>
            <div className='d-flex align-items-center'>
              <div className='mr-2' style={{ backgroundColor: "#f8c77e", height: 16, width: 16, borderRadius: 4 }}></div>
              <p className='font-weight-bold mb-0 py-2'>See all Premium features</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to='/' className='profile-link-strict d-flex flex-column justify-content-center px-3'>
            <div className='d-flex align-items-center'>
              <i className='fas fa-bookmark mr-2'></i>
              <p className='font-weight-bold mb-0 py-2'>Saved items</p>
            </div>
          </Link>
        </div>
      </div>

      <div className='feed-left-container'>
        <div>
          <div className='px-3 py-2'>
            <p className='mb-0'>Recent</p>
          </div>
          <Link to='/' className='profile-link d-flex align-items-center px-3 mb-2'>
            <i className='fas fa-users mr-2'></i>
            <p className='grey-text mb-0'>Premium Career Group</p>
          </Link>
          <div className='px-3 py-2'>
            <p className='blue-text mb-0'>Groups</p>
          </div>
          <Link to='/' className='profile-link d-flex align-items-center px-3'>
            <i className='fas fa-users mr-2'></i>
            <p className='grey-text mb-0'>Premium Career Group</p>
          </Link>
          <Link to='/' className='profile-link d-flex align-items-center px-3 mb-2'>
            <p className='grey-text mb-0 ml-4'>See All</p>
          </Link>
          <Link to='/'>
            <div className='d-flex justify-content-between px-3 mb-1'>
              <p className='blue-text mb-0'>Events</p>
              <i className='fas fa-plus' style={{ cursor: "pointer" }}></i>
            </div>
          </Link>
          <Link to='/'>
            <div className='px-3'>
              <p className='blue-text mb-0'>Followed Hashtags</p>
            </div>
          </Link>
        </div>
        <Link to='/' className='brdr-top dicover-more-btn text-center py-2'>
          <p className='font-weight-bold mb-0'>Discover More</p>
        </Link>
      </div>
    </>
  );
}

export default FeedLeft;
