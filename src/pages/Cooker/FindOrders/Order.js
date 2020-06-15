import React from "react";
import { timeAgoUnix } from "../../../store/components/timeAgoUnix";
import { timeToUnix } from "../../../store/components/timeToUnix";

const Order = (props) => {
  const { order } = props;
  return (
    <div
      className="card-item"
      style={{
        background: `hsl(${Math.random() * 359 + 1},100%,99%)`,
      }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="pr-2">
            <img
              width={30}
              className="rounded-circle border border-success "
              src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
              alt="Adil dalbaeb"
            />
          </div>
          <div className="pt-1">{order.user.name}</div>
        </div>
        <div className="text-muted ">{timeAgoUnix(order.creation_date)}</div>
      </div>
      <div className="pl-1">
        <p>{order.body}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center pl-1">
        <div className="d-flex ">
          <div className=" text-muted ">Нужен {timeToUnix(order.deadline)}</div>
          <div className="col-auto text-muted">Вес: {order.weight}кг</div>
          <div className="col-auto text-muted">Цена: {order.price}тг</div>
        </div>
        <div>
          <div className="card-button">Взять заказ</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
