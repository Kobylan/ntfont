import React from "react";
import { history } from "../../../history";
import { timeAgoUnix } from "../../../components/timeAgoUnix";
import { timeToUnix } from "../../../components/timeToUnix";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="avatar-card d-flex align-items-start mb-15">
      <div className="avatar mr-10">
        <img
          width="100%"
          className="rounded"
          src={order.avatar}
          alt="Adil genius"
        />
      </div>
      <div className="avatar-content rounded p-15 d-flex flex-column text-break">
        <div className="d-flex align-items-start justify-content-between">
          <span className="h5">{order.title}</span>
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
            className="btn btn-primary"
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
