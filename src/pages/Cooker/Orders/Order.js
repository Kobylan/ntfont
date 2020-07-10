import React from "react";
import { history } from "../../../history";
import { timeAgoUnix } from "../../../components/timeAgoUnix";
import { timeToUnix } from "../../../components/timeToUnix";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="d-flex w-100 mb-15 align-items-start">
      <img
        className="mr-10 top-10 position-sticky w-80px rounded"
        src={order.avatar}
        alt="Adil genius"
      />
      <div className="w-100 rounded bg-white p-15 d-flex flex-column text-break overflow-hidden">
        <div className="d-flex align-items-start justify-content-between">
          <span className="font-size-20">{order.title}</span>
          <span className="text-muted align-items-center">
            {timeAgoUnix(12)}
          </span>
        </div>
        <div className="p-10">{order.description}</div>
        <div className="d-flex align-items-center justify-content-between mt-10 ">
          <div>Цена: {order.price}тг</div>
          <div>Вес: {order.weight}кг</div>
        </div>
        <div className="d-flex align-items-center justify-content-between text-muted mt-10">
          <div>Нужен {timeToUnix(order.deadline)}</div>
          <div
            className="btn"
            onClick={() => history.push(`/orders/${order.id}`)}
          >
            Перейти к сообщениям
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
