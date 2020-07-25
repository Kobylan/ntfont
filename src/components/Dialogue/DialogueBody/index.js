import React, { useEffect, useState } from "react";
import Icon from "../../Icon";
import Message from "./Message";
import Skeleton from "../../Skeleton";
const messeges = [
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 2,
    type: "end",
    message: "Saucepan ",
    date: "15/05/1999",
  },
  {
    id: 3,
    type: "end",
    message: "the thing loves?",
    date: "15/05/1999",
  },
  {
    id: 4,
    type: "start",
    message: "with carrots drink rice vinegar. ",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Ho-ho-ho! punishment of hunger!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Quickly infiltrate a planet!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "With truffels drink triple sec!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Always command a nanomachine!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Be calm!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Wind, friendship, and peace!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Collectives warp with pressure!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Be united!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message:
      "Per guest prepare a dozen pounds of BBQ sauce with sliced peanut butter for dessert.",
    date: "15/05/1999",
  },
  {
    id: 1,
    type: "start",
    message: "Cur bursa cadunt?",
    date: "15/05/1999",
  },
  {
    id: 2,
    type: "end",
    message: "Saucepan ",
    date: "15/05/1999",
  },
  {
    id: 3,
    type: "end",
    message: "the thing loves?",
    date: "15/05/1999",
  },
  {
    id: 4,
    type: "start",
    message: "with carrots drink rice vinegar. ",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "end",
    message: "Ho-ho-ho! punishment of hunger!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Quickly infiltrate a planet!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "With truffels drink triple sec!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Always command a nanomachine!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "end",
    message: "Be calm!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "end",
    message: "Wind, friendship, and peace!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Collectives warp with pressure!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "start",
    message: "Be united!",
    date: "15/05/1999",
  },
  {
    id: 5,
    type: "end",
    message:
      "Per guest prepare a dozen pounds of BBQ sauce with sliced peanut butter for dessert.",
    date: "15/05/1999",
  },
];
const DialogueBody = () => {
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
        className="h-100 rounded-left p-20 w-100"
        style={{ overflow: "hidden auto" }}
      >
        {loading ? (
          <Skeleton height={50} width="235" />
        ) : (
          messeges.map((e) => <Message message={e} />)
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
