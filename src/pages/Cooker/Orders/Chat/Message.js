import React from "react";

const Message = (props) => {
  const { message } = props;
  return (
    <div className={`d-flex justify-content-${message.type}`}>
      <div className="chat-message max-content br-3">{message.message}</div>
    </div>
  );
};

export default Message;
