import React from "react";

export const Reviews = (props) => {
  return (
    <div className="d-flex align-items-start mb-3 review-card">
      <div className="avatar mr-2">
        <img
          width="100%"
          className="br-3"
          src={props.data.avatar}
          alt="Adil genius"
        />
      </div>
      <div className="avatar-content br-3 p-3 d-flex flex-column text-break">
        <div className="d-flex align-items-center justify-content-between border-bottom h5">
          <span>{props.data.name}</span>
          <span>{props.data.rating}</span>
        </div>
        <div className="pt-2">{props.data.review}</div>
      </div>
    </div>
  );
};
