import React, { useEffect } from "react";
import { socket } from "../../../store/socket";
import { useDispatch, useSelector } from "react-redux";
import ChatListElement from "./ChatListElement";
const ChatList = () => {
  const dispatch = useDispatch();
  const listChats = useSelector((store) => store.chat.listChats);
  //get List CHats
  useEffect(() => {
    dispatch({
      type: "LIST_CHATS_LOADING",
      payload: true,
    });
    socket.send(JSON.stringify({ command: "list_chats", page: `1` }));
  }, []);
  return (
    <div className="w-390px d-flex flex-column h-100 position-relative border-right-grey">
      <div className="h-50px font-size-20 p-20 w-100">Список диалогов</div>
      <div
        className="h-100 rounded-left w-100"
        style={{ overflow: "hidden auto" }}
      >
        {listChats.loading
          ? "LOADING"
          : listChats.data.map((e) => <ChatListElement chat={e} />)}
        <div className="mv-20" />
      </div>
    </div>
  );
};

export default ChatList;
