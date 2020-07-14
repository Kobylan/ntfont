import { useEffect, useState } from "react";
import axios from "axios";

export const useOrdersSearch = (page, filterParms) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/orders/",
      params: {
        page: page,
        price_lte: filterParms.price_lte,
        price_gte: filterParms.price_gte,
        weight_lte: filterParms.weight_lte,
        weight_gte: filterParms.weight_gte,
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
  }, [page]);
  return { loading, error, orders, hasMore };
};
