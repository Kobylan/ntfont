import React, { useEffect, useState } from "react";
import Order from "./Order";
import * as axios from "axios";

const FindOrder = () => {
  const [orders, setOrders] = useState("loading");

  useEffect(async () => {
    const result = await axios.default(
      "https://nateste.herokuapp.com/api/orders"
    );
    setOrders(result.data);
  }, []);
  console.log(orders);
  return (
    <div className="mt-5">
      {orders === "loading"
        ? "loading..."
        : orders === []
        ? "No orders"
        : orders.map((order) => <Order order={order} />)}
    </div>
  );
};

export default FindOrder;
