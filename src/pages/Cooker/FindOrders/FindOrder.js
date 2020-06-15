import React, { useEffect, useState } from "react";
import Order from "./Order";
import * as axios from "axios";
import Loading from "../../../store/components/Loading";
import useInfiniteScroll from "../../../store/components/useInfiniteScroll";

const FindOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  const fetchData = async () => {
    const result = await axios("https://nateste.herokuapp.com/api/orders");
    setOrders((prevState) => Object.assign(prevState, result.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  function fetchMoreListItems() {
    setTimeout(() => {
      fetchData();
      setIsFetching(false);
    }, 5000);
  }

  return (
    <div className="middle-content ">
      <div>FILTER ELEMENT</div>
      <div className="">
        {
          (console.log(orders),
          orders === [] ? (
            <Loading />
          ) : (
            orders.map((order, i) => <Order key={i} order={order} />)
          ))
        }
        {isFetching && "Fetching more list items..."}
      </div>
    </div>
  );
};

export default FindOrder;
