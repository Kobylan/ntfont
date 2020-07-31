import React, { useState } from "react";
import Icon from "../../Icon";
import { socket, useSocket } from "../../../store/socket";

const DialogueFooter = () => {
  const { store, dispatch } = useSocket();

  //send Message
  const handleSendMessage = () => {
    if (!store.dataLoading) {
      setNewMessage("");
      socket.send(
        JSON.stringify({
          command: "new_message",
          message: newMessage,
          recipient: store.currentDialogue,
        })
      );
    }
  };
  //send when press send
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  //
  const [newMessage, setNewMessage] = useState("");
  return (
    <div
      className="position-relative rounded-right border-top d-flex justify-content-between bg-white-gray"
      style={{ minHeight: "50px" }}
    >
      <label
        htmlFor="image_uploads"
        className="cursor-pointer p-10 d-flex align-items-center hover-blue"
        title="Загрузить изображение"
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
        value={newMessage}
        className="w-100 m-5 outline-none  border-transparent rounded p-10"
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
        onKeyPress={(e) => handlePressKey(e)}
      />
      <div
        className="cursor-pointer p-10 d-flex align-items-center hover-blue "
        title="Отправить сообщение"
        onClick={() => handleSendMessage()}
      >
        <Icon name="send" width="40px" height="40px" />
      </div>
    </div>
  );
};

export default DialogueFooter;
