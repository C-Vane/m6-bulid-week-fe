import React from "react";
import { Link } from "react-router-dom";

function SearchItem(props) {
  return (
    <Link to={`/profile/${props.data._id}`}>
      <div className="search-item d-flex align-items-center">
        <div className="search-image mr-2" style={{ background: `url(${props.data.image})` }}></div>
        <h6 className="mb-0 mr-1">{props.data.name}</h6>
        <h6 className=" mb-0 mr-2">{props.data.surname}</h6>
        <p className="mr-2 mb-0">- 1st -</p>
        <p className="mb-0">{props.data.title}</p>
      </div>
    </Link>
  );
}

export default SearchItem;
