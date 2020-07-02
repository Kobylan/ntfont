import React from "react";

const Message = (props) => {
  const { message } = props;
  return (
    <div className={`d-flex justify-content-${message.type}`}>
      <div className="chat-message br-3 ">
        {message.message}
        <div className="chat-message__time d-flex justify-content-end">
          <div>15:00</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
