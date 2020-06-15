import React, { useEffect, useState } from "react";
import Order from "./Order";
import * as axios from "axios";
import Loading from "../../../store/components/Loading";

const FindOrder = () => {
  const [orders, setOrders] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://nateste.herokuapp.com/api/orders");
      setOrders(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="middle-content ">
      <div>FILTER ELEMENT</div>
      <div className="">
        {orders === "loading" ? (
          <Loading />
        ) : orders === [] ? (
          "No orders"
        ) : (
          orders.map((order, i) => <Order key={i} order={order} />)
        )}
      </div>
    </div>
  );
};

export default FindOrder;
