import React, { useEffect, useState } from "react";
import Icon from "../../Icon";
import Message from "./Message";
import Skeleton from "../../Skeleton";
const DialogueBody = ({ from, messages }) => {
  const loading = false;
  //SCROLL TO BOTTOM IN CHAT BODY
  const messagesEndRef = React.createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  //
  return (
    <div className="h-100 d-flex flex-column position-relative">
      <div
        className="h-100 rounded-left p-20 w-100 "
        style={{ overflow: "hidden scroll" }}
      >
        {loading ? (
          <Skeleton height={50} width="235" />
        ) : (
          <>
            <div style={{ height: "30px" }} />
            {messages.reverse().map((e) => (
              <Message message={e} from={from} />
            ))}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="h-50px rounded-right border-top d-flex justify-content-between">
        <label
          htmlFor="image_uploads"
          className="cursor-pointer p-10 d-flex align-items-center hover-blue"
        >
          <Icon name="add-file" width="40px" height="40px" />
          <input
            id="image_uploads"
            accept=".jpg, .jpeg, .png"
            style={{ width: "0px", height: "0px" }}
            type="file"
            onChange={(e) => {
              // const formData = new FormData();
              // formData.append("file", e.target.files[0]);
              // dispatch(editProfileAvatar(formData));
            }}
          />
        </label>
        <input
          type="text"
          placeholder="Напишите новое сообщение"
          className="w-100 m-5 outline-none bg-white-gray border-transparent rounded  "
        />
        <div className="cursor-pointer p-10 d-flex align-items-center hover-blue">
          <Icon name="send" width="40px" height="40px" />
        </div>
      </div>
    </div>
  );
};

export default DialogueBody;
