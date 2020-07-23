import { useEffect, useState } from "react";
import axios from "axios";

const useMyProfileRating = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rating, setRating] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/rating/",
    })
      .then((res) => {
        setRating(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return { loading, error, rating };
};

export default useMyProfileRating;
