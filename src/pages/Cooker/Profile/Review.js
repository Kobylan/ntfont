import React from "react";
import { timeAgoUnix } from "../../../components/timeAgoUnix";

export const Review = ({ review }) => {
  return (
    <div className="d-flex w-100 mb-15 align-items-start">
      <div
        className="mr-10 top-10 position-sticky  rounded"
        style={{
          background: `url(${review.customer.avatar.file}) no-repeat 50% 50% / cover`,
          minWidth: "80px",
          height: "80px",
        }}
      />
      <div className="w-100 rounded bg-white p-15 d-flex flex-column text-break overflow-hidden">
        <div className="d-flex justify-content-between border-bottom font-size-20">
          <div>{review.title}</div>
          <div>{review.rating}</div>
        </div>
        <div className="mt-10 p-10">{review.description}</div>
        <div className="d-flex justify-content-between">
          <div className="text-muted align-self-end">
            {review.customer.first_name} {review.customer.last_name}
          </div>
          <div className="text-muted align-self-end">
            {timeAgoUnix(review.created_at)}
          </div>
        </div>
      </div>
    </div>
  );
};
