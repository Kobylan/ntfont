import React from "react";

export const Reviews = (props) => {
  return (
    <div className="d-flex align-items-start mb-3 review-card">
      <img
        width="100%"
        className="profile-avatar shadow mr-2"
        src={props.data.avatar}
        alt="Adil genius"
      />
      <div className="review-content  p-3 d-flex flex-column text-break">
        <div className="d-flex align-item-center justify-content-between border-bottom">
          <div>{props.data.name}</div>
          <div className="h5 ">{props.data.rating}</div>
        </div>
        <div className="pt-2">{props.data.review}</div>
      </div>
    </div>
  );
};
