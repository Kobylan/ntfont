import React, { useEffect, useState } from "react";
import axios from "axios";

const useMyProfileRating = () => {
  const [loadingRating, setLoadingRating] = useState(true);
  const [errorRating, setErrorRating] = useState(false);
  const [rating, setRating] = useState([]);
  useEffect(() => {
    setLoadingRating(true);
    setErrorRating(false);
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/rating/",
    })
      .then((res) => {
        setRating(res.data);
        setLoadingRating(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setErrorRating(true);
        setLoadingRating(false);
      });
  }, []);
  return { loadingRating, errorRating, rating };
};

export default useMyProfileRating;
