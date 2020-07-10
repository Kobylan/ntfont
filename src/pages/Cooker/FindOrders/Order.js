import React from "react";
import { timeAgoUnix } from "../../../components/timeAgoUnix";
import { timeToUnix } from "../../../components/timeToUnix";
import { history } from "../../../history";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="d-flex align-items-start mb-15">
      <img
        className="mr-10 top-10 position-sticky w-80px rounded"
        src={
          "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
        }
        alt="Adil genius"
      />
      <div className="w-100 rounded bg-white p-15 d-flex flex-column w-100  text-break overflow-hidden">
        <div className="d-flex align-items-start justify-content-between">
          <span className="font-size-20">{order.title}</span>
          <span className="text-muted align-items-center">
            {timeAgoUnix(order.created_at)}
          </span>
        </div>
        <div className="p-5">{order.description}</div>
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
