import React from "react";

export const Reviews = (props) => {
  return (
    <div className="d-flex align-items-start mb-3 review-card">
      <div className="profile-review-avatar mr-2">
        <img
          width="100%"
          className="br-3"
          src={props.data.avatar}
          alt="Adil genius"
        />
      </div>
      <div className="review-content br-3 p-3 d-flex flex-column text-break">
        <div className="d-flex align-item-center justify-content-between border-bottom">
          <div>{props.data.name}</div>
          <div className="h5 ">{props.data.rating}</div>
        </div>
        <div className="pt-2">{props.data.review}</div>
      </div>
    </div>
  );
};
