import React, { useEffect, useState } from "react";
import axios from "axios";

const useAPI = (url, method = "GET", params, body, infScroll = false) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const trigger = infScroll ? params : "";
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: method,
      url: `https://thawing-reef-32246.herokuapp.com/api/${url}/`,
      body: body,
      params: params,
    })
      .then((res) => {
        infScroll
          ? setData((prevOrders) => {
              prevOrders.concat(res.data.results);
              setHasMore(res.data.next !== null);
            })
          : setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
  }, [trigger]);
  return { loading, error, data, hasMore };
};

export default useAPI;
// GET params:{}
// PUT data:
