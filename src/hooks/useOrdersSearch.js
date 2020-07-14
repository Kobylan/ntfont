import { useEffect, useState } from "react";
import axios from "axios";

export const useOrdersSearch = (page, filter) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setOrders([]);
  }, [filter]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/orders/",
      params: {
        page: page,
        price__lte: filter.price_lte,
        price__gte: filter.price_gte,
        weight__lte: filter.weight_lte,
        weight__gte: filter.weight_gte,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setOrders((prevOrders) => prevOrders.concat(res.data.results));
        setHasMore(res.data.next !== null);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  }, [page, filter]);
  return { loading, error, orders, hasMore };
};
