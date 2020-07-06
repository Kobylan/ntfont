import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { history } from "../../../../history";
import { ReactComponent as AddFile } from "../../../../assets/icons/chat/add-file.svg";
import { ReactComponent as Back } from "../../../../assets/icons/chat/back.svg";
import { ReactComponent as Send } from "../../../../assets/icons/chat/send.svg";
import { ReactComponent as AddImage } from "../../../../assets/icons/chat/add-image.svg";
import { ReactComponent as SendFilled } from "../../../../assets/icons/chat/send-filled.svg";
import { ReactComponent as AddImageFilled } from "../../../../assets/icons/chat/add-image-filled.svg";
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
      message:
        "Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "end",
      message:
        "Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!",
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
  function readFile(file) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const result = event.target.result;
      setFile(result);
    });

    reader.addEventListener("progress", (event) => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100;
        console.log(`Progress: ${Math.round(percent)}`);
      }
    });
    reader.readAsDataURL(file);
  }
  const { userID } = useParams();
  const messagesEndRef = React.createRef();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    setScrolled(true);
  }, []);

  return (
    <div
      className="chat-body d-flex flex-column justify-content-between rounded"
      onDragOver={(e) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrag(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        readFile(files[0]);
        setDrag(false);
      }}
    >
      <div className="chat-info flex-column border-bottom">
        <div className="chat-info-username d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Back
              className="chat__icon pointer"
              onClick={() => history.push("/orders")}
              title="Назад"
            />
            <img
              src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
              alt="Adil Kairolla"
              className="chat-avatar rounded"
            />
            <span className="ml-10">Adil Kairolla</span>
          </div>
          <div className="text-muted">в сети</div>
        </div>
      </div>
      {drag ? (
        <div className="chat-message-drag-content">
          <AddFile width={200} />
          Перетащите сюда изображения чтобы
          <br /> прикрепить их к сообщению
        </div>
      ) : (
        <div className={`chat-message-content ${!scrolled && "invisible"}`}>
          {messeges.map((message) => (
            <Message message={message} />
          ))}
          <img src={file} className="chat-message" />
          {console.log(file)}
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className="chat-send-message border-top">
        <div className="btn" onClick={() => console.log(messagesEndRef)}>
          <div
            onMouseEnter={() => setActive("add-image")}
            onMouseLeave={() => setActive("")}
            title="Добавить изображение"
          >
            {active === "add-image" ? (
              <AddImageFilled
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            ) : (
              <AddImage
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            )}
          </div>
        </div>
        <input
          type="text"
          placeholder="Напишите новое сообщение"
          className="chat-send-message__input rounded"
        />
        <div className="btn" onClick={() => console.log(messagesEndRef)}>
          <div
            onMouseEnter={() => setActive("send")}
            onMouseLeave={() => setActive("")}
            title="Отправить сообщение"
          >
            {active === "send" ? (
              <SendFilled
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            ) : (
              <Send
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
