import React from "react";
import DialogueBody from "../../../components/Dialogue/DialogueBody";
import DialogueHeader from "../../../components/Dialogue/DialogueHeader";
import DialogueFooter from "../../../components/Dialogue/DialogueFooter";
import { useSelector } from "react-redux";

const ChatBody = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
      {useSelector((store) => store.chat.dialogueID.id) !== 0 ? (
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
