import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { socket, useSocket } from "../../../store/socket";
import DialogueBody from "../../../components/Dialogue/DialogueBody";
import DialogueHeader from "../../../components/Dialogue/DialogueHeader";
import DialogueFooter from "../../../components/Dialogue/DialogueFooter";

const ChatBody = () => {
  const { store, dispatch } = useSocket();

  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
      {store.currentDialogue !== 0 ? (
        <div className="h-100 d-flex flex-column position-relative">
          <DialogueHeader />
          <DialogueBody />
          <DialogueFooter />
        </div>
      ) : (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center font-size-20">
          Найдите заказ и начните диалог с заказчиком
        </div>
      )}
    </div>
  );
};

export default ChatBody;
