import React from "react";
import { timeAgoUnix } from "../../../store/components/timeAgoUnix";
import { timeToUnix } from "../../../store/components/timeToUnix";

const Order = (props) => {
  const { order } = props;
  return (
    <div
      className="col rounded shadow p-3 mb-4"
      // style={{
      //   background: `hsl(${Math.floor(
      //     Math.random() * (340 - 20) + 20
      //   )},100%,97%)`,
      // }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div></div>
          <div>{order.user.name}</div>
        </div>
        <div>{timeAgoUnix(order.creation_date)}</div>
      </div>
      <div>
        <p>{order.body}</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div>Нужен {timeToUnix(order.deadline)}</div>
          <div>{order.weight}</div>
          <div>{order.price}</div>
        </div>
        <div>
          <div className="btn btn-outline-success">Принять заказ</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
