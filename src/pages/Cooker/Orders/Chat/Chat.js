import React from "react";
import { useParams } from "react-router-dom";
import { history } from "../../../../history";
import { ReactComponent as Back } from "../../../../assets/icons/back.svg";
import "../../../../assets/css/chat.css";
import Message from "./Message";

const Chat = () => {
  const messeges = [
    {
      id: 1,
      type: "start",
      message: "Привет, как дела?",
      date: "15/05/1999",
    },
    {
      id: 2,
      type: "end",
      message: "Привет",
      date: "15/05/1999",
    },
    {
      id: 3,
      type: "end",
      message: "хорошо ты как?",
      date: "15/05/1999",
    },
    {
      id: 4,
      type: "start",
      message: "хорошо, спасибо",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
  ];
  const { userID } = useParams();
  return (
    <div className="d-flex flex-column flex-grow-1  chat-container ">
      <div className="chat-back">
        <div
          className="card-title btn btn-secondary d-flex align-items-center max-content"
          onClick={() => history.push("/orders")}
        >
          <Back width={30} fill="#fff" />
          <span className="pl-2">Назад</span>
        </div>
      </div>
      <div className="chat-body d-flex flex-column justify-content-between">
        <div className="chat-info flex-column">
          <div className="chat-info-username">Adil</div>
          <div className="chat-avatar"></div>
        </div>
        <div className="chat-message-content">
          {messeges.map((message) => (
            <Message message={message} />
          ))}
        </div>

        <div className="chat-send-message">
          <input type="text" className="chat-input" />
          <div className="btn btn-success">send</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
