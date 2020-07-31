import React, { useCallback, useEffect, useRef, useState } from "react";
import { socket, useSocket } from "../../../store/socket";
import AvatarCard from "../../../components/AvatarCard";
import { useSelector } from "react-redux";

const ChatList = () => {
  const { store, dispatch } = useSocket();
  let newMessage = useSelector((state) => state.chatNewMessage);
  const calculateNewMessages = (e) => {
    let count = 0;
    for (let i = 0; i < newMessage.data.length; i++) {
      if (newMessage.data[0]?.author === e) {
        count++;
      }
    }
    return count;
  };

  //infinite scroll
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch({
      ...store,
      listChatsLoading: true,
    });
    socket.send(JSON.stringify({ command: "list_chats", page: `${page}` }));
  }, [page]);
  const observer = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (store.listChatsLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage(page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [store.listChatsLoading]
  );
  const renderItems = store.listChats.map((e) => (
    <a
      className="d-flex align-items-center cursor-pointer hover-whitegray"
      ref={lastOrderElementRef}
      key={e.id}
      style={{
        padding: "10px 20px",
      }}
      onClick={() =>
        dispatch({
          ...store,
          currentDialogue: e.user_id,
        })
      }
    >
      <div
        className="rounded-circle"
        style={{
          background: `url(${e.avatar}) no-repeat 50% 50% / cover`,
          width: "50px",
          height: "50px",
          border: "2px solid red",
        }}
      />
      <div
        className="ml-10 max-width-150px"
        style={{ wordBreak: "break-word" }}
      >
        {e.first_name} {e.last_name}
      </div>

      {calculateNewMessages(e.username) !== 0 && (
        <div
          className="ml-10 rounded-circle bg-blue text-white text-align-center"
          style={{ width: "20px", height: "20px" }}
        >
          {calculateNewMessages(e.username)}
        </div>
      )}
    </a>
  ));
  return (
    <div className="w-390px d-flex flex-column h-100 position-relative border-right-grey">
      <div className="h-50px font-size-20 p-20 w-100">Список диалогов</div>
      <div
        className="h-100 rounded-left w-100"
        style={{ overflow: "hidden auto" }}
      >
        {renderItems}
        <div className="mv-20" />
      </div>
    </div>
  );
};

export default ChatList;
