import React from "react";
import { history } from "../../../history";

const Order = (props) => {
  return (
    <div className="d-flex align-items-start mb-3 avatar-card">
      <div className="avatar mr-2">
        <img
          width="100%"
          className="br-3"
          src={props.order.avatar}
          alt="Adil genius"
        />
      </div>
      <div className="avatar-content br-3 p-3 d-flex flex-column text-break">
        <div className="d-flex align-items-center justify-content-between border-bottom h5">
          <span>{props.order.name}</span>
          <span className="text-success">в сети</span>
        </div>
        <div className="pt-2">{props.order.description}</div>
        <div
          className="btn btn-primary"
          onClick={() => history.push(`/orders/${props.order.id}`)}
        >
          Перейти к сообщениям
        </div>
      </div>
    </div>
  );
};

export default Order;
