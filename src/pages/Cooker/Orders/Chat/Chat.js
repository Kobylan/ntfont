import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { history } from "../../../../history";
import { ReactComponent as Back } from "../../../../assets/icons/chat/arrow_back_ios-24px.svg";
import { ReactComponent as Send } from "../../../../assets/icons/chat/send-24px.svg";
import { ReactComponent as AddImage } from "../../../../assets/icons/chat/add_photo_alternate-24px.svg";
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
  const messagesEndRef = React.createRef();
  const [scrolled, setScrolled] = useState(false);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    setScrolled(true);
  }, []);
  return (
    <div className="chat-body d-flex flex-column justify-content-between br-3">
      <div className="chat-info flex-column border-bottom">
        <div className="chat-info-username d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Back
              className="chat__icon pointer"
              onClick={() => history.push("/orders")}
            />
            <span className="ml-2">Adil Kairolla</span>
          </div>
          <div className="text-muted">в сети</div>
        </div>
        <div className="chat-avatar" />
      </div>

      <div className={`chat-message-content ${!scrolled && "invisible"}`}>
        {messeges.map((message) => (
          <Message message={message} />
        ))}
        <div style={{ float: "left", clear: "both" }} ref={messagesEndRef} />
      </div>

      <div className="chat-send-message border-top">
        <div className="btn" onClick={() => console.log(messagesEndRef)}>
          <AddImage
            onClick={() => history.push("/orders")}
            className="chat__icon"
          />
        </div>
        <input
          type="text"
          placeholder="Напишите новое сообщение"
          className="chat-send-message__input br-3"
        />
        <div className="btn" onClick={() => console.log(messagesEndRef)}>
          <Send
            onClick={() => history.push("/orders")}
            className="chat__icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
