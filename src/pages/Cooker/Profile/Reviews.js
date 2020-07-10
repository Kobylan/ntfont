import React from "react";

export const Reviews = (props) => {
  return (
    <div className="d-flex w-100 mb-15 align-items-start">
      <img
        className="mr-10 top-10 position-sticky w-80px rounded"
        src={props.data.avatar}
      />
      <div className="w-100 rounded bg-white p-15 d-flex flex-column text-break overflow-hidden">
        <div className="d-flex justify-content-between border-bottom font-size-20">
          <div>{props.data.name}</div>
          <div>{props.data.rating}</div>
        </div>
        <div className="mt-10 p-10">{props.data.review}</div>
        <div className="text-muted align-self-end">12 дней назад</div>
      </div>
    </div>
  );
};
