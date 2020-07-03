import { useEffect, useState } from "react";
import axios from "axios";

export const useOrdersSearch = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    console.log(query);
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/orders/",
      params: query,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setOrders((prevOrders) => prevOrders.concat(res.data));
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  }, [query]);
  return { loading, error, orders, hasMore };
};
