import React, { useEffect, useState } from "react";
import axios from "axios";

const useMyProfileReview = (page) => {
  const [loadingReview, setLoadingReview] = useState(true);
  const [errorReview, setErrorReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoadingReview(true);
    setErrorReview(false);
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/review/",
      params: { page: page },
    })
      .then((res) => {
        console.log(res.data.results);
        setReviews((prevOrders) => prevOrders.concat(res.data.results));
        setHasMore(res.data.next !== null);
        setLoadingReview(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setErrorReview(true);
        setLoadingReview(false);
      });
  }, [page]);
  return { loadingReview, errorReview, reviews, hasMore };
};

export default useMyProfileReview;
