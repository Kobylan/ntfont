import React from "react";
import { timeAgoUnix } from "../../../components/timeAgoUnix";
import { timeToUnix } from "../../../components/timeToUnix";
import { history } from "../../../history";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="avatar-card d-flex align-items-start mb-3">
      <div className="avatar mr-2">
        <img
          width="100%"
          className="br-3"
          src={
            "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
          }
          alt="Adil genius"
        />
      </div>
      <div className="avatar-content br-3 p-3 d-flex flex-column text-break">
        <div className="d-flex align-items-start justify-content-between">
          <span className="h5">{order.title}</span>
          <span className="text-muted align-items-center">
            {timeAgoUnix(order.created_at)}
          </span>
        </div>
        <div className="p-2">{order.description}</div>
        <div className="d-flex align-items-center justify-content-between mt-2 ">
          <div>Цена: {order.price}тг</div>
          <div>Вес: {order.weight}кг</div>
        </div>
        <div className="d-flex align-items-center justify-content-between text-muted mt-2">
          <div>нужен {timeToUnix(order.deadline)}</div>
          <div
            className="btn btn-primary"
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
