import React from "react";
import ContainerFluid from "../../components/ContainerFluid";
import { useSocket } from "../../store/socket";
import ChatList from "../../sections/Chat/ChatList";
import ChatBody from "../../sections/Chat/ChatBody";

const Chat = () => {
  return useSocket().store.connected ? (
    <ContainerFluid>
      <div className="d-flex h-100 rounded">
        <ChatList />
        <ChatBody />
      </div>
    </ContainerFluid>
  ) : (
    <div className="text-white font-size-24 mt-20">
      Не удалось подключится к серверу
      <br /> Приносим свои извинения
    </div>
  );
};

export default Chat;
