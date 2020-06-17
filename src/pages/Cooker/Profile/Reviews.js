import React from "react";

export const Reviews = (props) => {
  return (
    <div className="review-card  p-3 d-flex flex-column text-break">
      <div className="d-flex align-item-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            width={40}
            className="rounded-circle border border-success "
            src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
            alt="Adil dalbaeb"
          />
          <div className="ml-2">{props.data.name}</div>
        </div>
        <div className="h5 ">{props.data.rating}</div>
      </div>
      <div className="pt-2">{props.data.review}</div>
    </div>
  );
};
