import React from "react";

const Message = (props) => {
  const { message } = props;
  return (
    <div className={`d-flex justify-content-${message.type}`}>
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
        {message.message}
        <div
          className="d-flex justify-content-end"
          style={{
            fontSize: "0.7rem",
            alignSelf: "flex-end",
            color: "rgba(250, 250, 250, 0.5)",
          }}
        >
          <div>15:00</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
