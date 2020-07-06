import React from "react";
import { timeAgoUnix } from "../../../components/timeAgoUnix";
import { timeToUnix } from "../../../components/timeToUnix";
import { history } from "../../../history";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="maxw-600px d-flex align-items-start mb-15">
      <img
        className="w-80px rounded position-sticky top-10 mr-10"
        src={
          "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
        }
        alt="Adil genius"
      />
      <div className="h-auto rounded bg-white p-15 d-flex flex-column w-100 text-break">
        <div className="d-flex align-items-start justify-content-between">
          <span className="font-size-20">{order.title}</span>
          <span className="text-muted align-items-center">
            {timeAgoUnix(order.created_at)}
          </span>
        </div>
        <div className="p-10 maxw-470px">{order.description}</div>
        <div className="d-flex align-items-center justify-content-between mt-10">
          <div>Цена: {order.price}тг</div>
          <div>Вес: {order.weight}кг</div>
        </div>
        <div className="d-flex align-items-center justify-content-between text-muted mt-10">
          <div>нужен {timeToUnix(order.deadline)}</div>
          <div
            className="btn"
            onClick={() => history.push(`/orders/${order.id}`)}
          >
            Взять заказ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
