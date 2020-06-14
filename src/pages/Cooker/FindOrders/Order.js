import React from "react";
import { timeAgoUnix } from "../../../store/components/timeAgoUnix";
import { timeToUnix } from "../../../store/components/timeToUnix";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="col rounded shadow p-3 mb-4">
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
        <div className="d-flex ">
          <div className=" col-auto text-muted ">
            Нужен {timeToUnix(order.deadline)}
          </div>
          <div className="col-auto text-muted">Вес: {order.weight}кг</div>
          <div className="col-auto text-muted">Цена: {order.price}тг</div>
        </div>
        <div>
          <div className="btn btn-outline-success">Принять заказ</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
