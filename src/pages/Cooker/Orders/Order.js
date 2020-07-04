import React from "react";
import { history } from "../../../history";
import { timeAgoUnix } from "../../../store/components/timeAgoUnix";
import { timeToUnix } from "../../../store/components/timeToUnix";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="avatar-card d-flex align-items-start mb-3">
      <div className="avatar mr-2">
        <img
          width="100%"
          className="br-3"
          src={order.avatar}
          alt="Adil genius"
        />
      </div>
      <div className="avatar-content br-3 p-3 d-flex flex-column text-break">
        <div className="d-flex align-items-start justify-content-between">
          <span className="h5">{order.title}</span>
          <span className="text-muted align-items-center">
            {timeAgoUnix(12)}
          </span>
        </div>
        <div className="p-2">{order.description}</div>
        <div className="d-flex align-items-center justify-content-between mt-2 ">
          <div>Цена: {order.price}тг</div>
          <div>Вес: {order.weight}кг</div>
        </div>
        <div className="d-flex align-items-center justify-content-between text-muted mt-2">
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
