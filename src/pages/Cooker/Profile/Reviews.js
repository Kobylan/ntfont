import React from "react";

export const Reviews = (props) => {
  return (
    <div className="d-flex align-items-start mb-10 mt-5 review-card">
      <img
        className="top-10 position-sticky mr-10 w-80px rounded"
        src={props.data.avatar}
        alt="Adil genius"
      />
      <div className="w-100 rounded bg-white p-15 d-flex flex-column text-break">
        <div className="d-flex align-items-center justify-content-between border-bottom h5">
          <span>{props.data.name}</span>
          <span>{props.data.rating}</span>
        </div>
        <div className="p-15 max-width-470px">{props.data.review}</div>
      </div>
    </div>
  );
};
