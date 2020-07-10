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
      className="bg-white position-absolute mv-20 w-100 max-width-600px d-flex flex-column justify-content-between rounded"
      style={{
        height: "calc(100% - 40px)",
      }}
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
      <div className="p-5 flex-column border-bottom">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Back
              className="w-30px fill-dark cursor-pointer"
              onClick={() => history.push("/orders")}
              title="Назад"
            />
            <img
              src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
              alt="Adil Kairolla"
              className="w-30px h-30px rounded"
            />
            <span className="ml-10">Adil Kairolla</span>
          </div>
          <div className="text-muted">в сети</div>
        </div>
      </div>
      {drag ? (
        <div className="h-100 bg-blue align-items-center d-flex flex-column justify-content-center text-align-center text-white fill-white cursor-events">
          <AddFile width={200} />
          <div>
            Перетащите сюда изображения чтобы
            <br /> прикрепить их к сообщению
          </div>
        </div>
      ) : (
        <div className={`overflow-auto p-10 h-100`}>
          {messeges.map((message) => (
            <Message message={message} />
          ))}
          <img src={file} className="m-5 max-width-80 bg-blue text-white " />
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className="d-flex align-items-center border-top">
        <div
          className="text-align-center p-5"
          onClick={() => console.log(messagesEndRef)}
        >
          <div
            onMouseEnter={() => setActive("add-image")}
            onMouseLeave={() => setActive("")}
            title="Добавить изображение"
          >
            {active === "add-image" ? (
              <AddImageFilled
                className="fill-blue w-30px cursor-pointer"
                onClick={() => history.push("/orders")}
              />
            ) : (
              <AddImage
                className="fill-dark w-30px cursor-pointer"
                onClick={() => history.push("/orders")}
              />
            )}
          </div>
        </div>
        <input
          type="text"
          placeholder="Напишите новое сообщение"
          className="w-100 pl-5 pr-5 pt-10 pb-10 outline-none bg-white-gray border-transparent rounded"
        />
        <div
          className="text-align-center p-5"
          onClick={() => console.log(messagesEndRef)}
        >
          <div
            onMouseEnter={() => setActive("send")}
            onMouseLeave={() => setActive("")}
            title="Отправить сообщение"
          >
            {active === "send" ? (
              <SendFilled
                className="fill-blue w-30px cursor-pointer"
                onClick={() => history.push("/orders")}
              />
            ) : (
              <Send
                className="fill-dark w-30px cursor-pointer"
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
