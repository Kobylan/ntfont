import React, { useEffect, useState } from "react";
import axios from "axios";

const useTodo = ({ params, method }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/todo/",
      params: {
        page: page,
      },
    })
      .then((res) => {
        console.log(res.data.results);
        setOrders((prevOrders) => prevOrders.concat(res.data.results));
        setHasMore(res.data.next !== null);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
  }, [page]);
  return { loading, error, orders, hasMore };
};

export default useTodo;
