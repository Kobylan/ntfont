import React, { useEffect, useState } from "react";
import ContainerFluid from "../../components/ContainerFluid";
import { useSocket } from "../../store/socket";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "../../store/hooks/meida";
import ChatDesktop from "./chatDesktop";
import ChatMobile from "./chatMobile";

const Chat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "LIST_CHATS_DATA_CLEAR",
    });
  }, []);
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_DIALOGUE_ID",
        payload: 0,
      });
    };
  }, []);

  const [chatListInMobile, setChatListInMobile] = useState(true);
  const minWidth500 = useMedia("(min-width:500px)");
  const minHeight500 = useMedia("(min-height:500px)");

  return useSocket().store.connected ? (
    <ContainerFluid>
      <div className="d-flex h-100 rounded">
        {minWidth500 && minHeight500 ? (
          <ChatDesktop />
        ) : (
          <ChatMobile
            chatListInMobile={chatListInMobile}
            setChatListInMobile={setChatListInMobile}
          />
        )}
      </div>
    </ContainerFluid>
  ) : (
    <div className="text-white text-align-center m-20 font-size-24">
      Сервер временно не доступен
    </div>
  );
};

export default Chat;
