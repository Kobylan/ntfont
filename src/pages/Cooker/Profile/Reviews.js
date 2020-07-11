import React, { useCallback, useRef, useState } from "react";
import useMyProfileReview from "../../../hooks/useMyProfileReview";
import { Review } from "./Review";
import Loading from "../../../components/Loading";

const Reviews = () => {
  const [reviewsPage, setReviewsPage] = useState(1);
  const reviews = useMyProfileReview(reviewsPage);
  const observer = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (reviews.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && reviews.hasMore) {
          setReviewsPage(reviewsPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [reviews.loading, reviews.hasMore]
  );
  return (
    <>
      {reviews.data.map((review) => (
        <div ref={lastOrderElementRef}>
          <Review review={review} />
        </div>
      ))}
      {reviews.loading && <Loading />}
    </>
  );
};

export default Reviews;
