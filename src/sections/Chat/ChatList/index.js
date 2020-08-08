import React, { useCallback, useEffect, useRef, useState } from "react";
import { socket } from "../../../store/socket";
import { useDispatch, useSelector } from "react-redux";
import ChatListElement from "./ChatListElement";
import { useMedia } from "../../../store/hooks/meida";
const ChatList = ({ setMobile }) => {
  const dispatch = useDispatch();
  const listChats = useSelector((store) => store.chat.listChats);
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
  const min1100 = useMedia("(min-width:1100px)");
  const minWidth500 = useMedia("(min-width:500px)");
  const minHeight500 = useMedia("(min-height:500px)");
  const [mediumActive, setMediumActive] = useState(true);
  return min1100 ? (
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
  ) : minWidth500 && minHeight500 ? (
    <div className="d-flex flex-column border-right-grey p-5">
      {mediumActive ? (
        <div onClick={() => setMediumActive(false)}>
          <div
            style={{
              width: "20px",
              borderBottom: "1px solid black",
              height: "1px",
              marginTop: "3px",
            }}
          />
          <div
            style={{
              width: "20px",
              borderBottom: "1px solid black",
              height: "1px",
              marginTop: "3px",
            }}
          />
          <div
            style={{
              width: "20px",
              borderBottom: "1px solid black",
              height: "1px",
              marginTop: "3px",
            }}
          />
        </div>
      ) : (
        <>
          <div
            className="h-100 rounded-left"
            style={{
              overflow: "hidden auto",
              maxWidth: "300px",
              minWidth: "300px",
            }}
          >
            {listChats.loading
              ? "LOADING"
              : listChats.data.map((e, i) => (
                  <div
                    ref={lastElementRef}
                    key={i}
                    onClick={() => setMediumActive(true)}
                  >
                    <ChatListElement chat={e} />
                  </div>
                ))}
            <div className="mv-20" />
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="w-100 h-100">
      {listChats.loading
        ? "LOADING"
        : listChats.data.map((e, i) => (
            <div ref={lastElementRef} key={i} onClick={() => setMobile(false)}>
              <ChatListElement chat={e} />
            </div>
          ))}
    </div>
  );
};

export default ChatList;
