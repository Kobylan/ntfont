import React, { useEffect, useState } from "react";
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
    <div className="d-flex flex-column flex-grow-1  chat-container ">
      <div className="chat-body d-flex flex-column justify-content-between br-3">
        <div className="chat-info flex-column border-bottom">
          <div className="chat-info-username d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Back width={30} onClick={() => history.push("/orders")} />
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

        <div className="chat-send-message">
          <input type="text" className="chat-input" />
          <div
            className="btn btn-success"
            onClick={() => console.log(messagesEndRef)}
          >
            send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
