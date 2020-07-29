import React, { useEffect, useReducer, useState } from "react";
import ContainerFluid from "../../components/ContainerFluid";
import Dialogues from "../../sections/Dialogues";
import Dialogue from "../../sections/Dialogue";
import { useDispatch, useSelector } from "react-redux";
import { getDialogues } from "../../store/actions/Chat/DIALOGUES";
import { responseReducer, socket, useSocket } from "../../store/socket";

const Chat = () => {
  const [context] = useSocket();
  const [currentDialogue, setCurrentDialogue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { list_chats, data, connected } = context;
  const dispatch = useDispatch();

  const chatMessageLoading = useSelector((store) => store.chatLoading);
  console.log(data);
  return (
    <ContainerFluid>
      <div className="d-flex h-100 rounded">
        {connected && (
          <>
            <Dialogues
              data={list_chats}
              setCurrentDialogue={setCurrentDialogue}
            />

            <Dialogue
              dialogue={currentDialogue}
              data={data}
              chatMessageLoading={chatMessageLoading.loading}
              list_chats={list_chats}
            />
          </>
        )}
      </div>
    </ContainerFluid>
  );
};

export default Chat;
