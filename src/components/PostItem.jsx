import React from "react";
import { Link } from "react-router-dom";

function PostItem({ data }) {
  return (
    <>
      {data.user && (
        <Link to={`/profile/${data.user.username}`}>
          <div className='search-item feed-right-container mt-3 align-items-center'>
            <div className='p-3 m-2'>
              <div className='d-flex'>
                <div className='search-image mr-2' style={{ background: `url(${data.user.image})` }}></div>
                <h6 className='mb-0 mr-1'>{data.user.name}</h6>
                <h6 className=' mb-0 mr-2'>{data.user.surname}</h6>
                <p className='mr-2 mb-0'>- 1st -</p>
                <p className='mb-0'>{data.user.title}</p>
              </div>
              <p className='text-justify h5 m-3'>{data.text}</p>
              {data.image && <img src={data.user.image} className='image-fluid mt-2' height='60px' />}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default PostItem;
