import React, { useCallback, useEffect, useRef, useState } from "react";
import { socket } from "../../../store/socket";
import { useDispatch, useSelector } from "react-redux";
import ChatListElement from "./ChatListElement";
const ChatList = () => {
  const dispatch = useDispatch();
  const listChats = useSelector((store) => store.chat.listChats);
  const dialogueID = useSelector((store) => store.chat.dialogueID.id);
  const [page, setPage] = useState(1);
  //get List CHats
  useEffect(() => {
    dispatch({
      type: "LIST_CHATS_LOADING",
      payload: true,
    });
    socket.send(JSON.stringify({ command: "list_chats", page: `${page}` }));
  }, [page]);
  //infinite scroll
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (listChats.loading) return;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && listChats.hasMore) {
          setPage(page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [listChats.loading, listChats.hasMore, listChats.data]
  );
  return (
    <div
      className="w-390px d-flex flex-column h-100 position-relative border-right-grey"
      style={{ maxWidth: "330px", minWidth: "330px" }}
    >
      <div
        className="h-50px d-flex cursor-select flex-column h-50px font-size-20 text-align-center justify-content-center w-100 border-bottom"
        style={{ minHeight: "50px" }}
      >
        Список диалогов
      </div>
      <div
        className="h-100 rounded-left w-100"
        style={{ overflow: "hidden auto" }}
      >
        {listChats.loading
          ? "LOADING"
          : listChats.data.map((e, i) => (
              <div ref={lastElementRef} key={i}>
                <ChatListElement chat={e} />
              </div>
            ))}
        <div className="mv-20" />
      </div>
    </div>
  );
};

export default ChatList;
