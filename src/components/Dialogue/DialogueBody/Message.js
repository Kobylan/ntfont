import React from "react";
import { timeToUnix } from "../../../utils/time";

const Message = ({ message, from }) => {
  const position = from === message.author ? "start" : "end";
  return (
    <div className={`d-flex justify-content-${position}`}>
      <div
        className="rounded"
        style={{
          margin: " 5px",
          maxWidth: "80%",
          background: "rgb(29, 161, 242)",
          color: "rgb(255, 255, 255)",
          padding: "0.375rem 0.75rem",
        }}
      >
        {message.content}
        <div
          className="d-flex justify-content-end"
          style={{
            fontSize: "0.7rem",
            alignSelf: "flex-end",
            color: "rgba(250, 250, 250, 0.5)",
          }}
        >
          <div>{timeToUnix(message.timestamp)}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
