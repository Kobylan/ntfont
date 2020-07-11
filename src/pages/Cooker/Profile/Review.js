import React from "react";
import { timeAgoUnix } from "../../../components/timeAgoUnix";

export const Review = ({ review }) => {
  return (
    <div className="d-flex w-100 mb-15 align-items-start">
      <img
        className="mr-10 top-10 position-sticky w-80px rounded"
        src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
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
