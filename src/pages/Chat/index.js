import React, { useEffect } from "react";
import ContainerFluid from "../../components/ContainerFluid";
import { useSocket } from "../../store/socket";
import ChatList from "../../sections/Chat/ChatList";
import ChatBody from "../../sections/Chat/ChatBody";
import { useDispatch } from "react-redux";

const Chat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "LIST_CHATS_DATA_CLEAR",
    });
  }, []);

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
    </div>
  );
};

export default Chat;
