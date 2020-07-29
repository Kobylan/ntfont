import React, { useEffect, useState } from "react";
import DialogueHeader from "../../components/Dialogue/DialogueHeader/";
import DialogueBody from "../../components/Dialogue/DialogueBody";
import { socket } from "../../store/socket";
import { useDispatch } from "react-redux";

const Dialogue = ({
  dialogue,
  data,
  chatMessageLoading,
  list_chats,
  isOpen,
}) => {
  const reduxDispatch = useDispatch();
  useEffect(() => {
    if (!chatMessageLoading) {
      reduxDispatch({
        type: "SET_CHAT_LOADING_TRUE",
      });
      socket.send(
        JSON.stringify({
          command: "fetch_messages",
          recipient: `${dialogue}`,
        })
      );
    }
  }, [dialogue]);

  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
      {!chatMessageLoading &&
      data.length !== 0 &&
      data.messages !== undefined ? (
        <DialogueBody
          from={list_chats.find((e) => e.id === dialogue).username}
          messages={data.messages}
          author={list_chats.find((e) => e.id === dialogue)}
        />
      ) : (
        <div>Найдите заказ и отправьте сообщение заказчику</div>
      )}
    </div>
  );
};

export default Dialogue;
