import React, { useCallback, useEffect, useRef, useState } from "react";
import { socket } from "../../../store/socket";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "../../../store/hooks/meida";
import ChatListDesktop from "./chatListDesktop";
import ChatListMobile from "./chatListMobile";
import ChatListTablet from "./chatListTablet";
const ChatList = ({ setChatListInMobile }) => {
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
  const [tabletActive, setTabletActive] = useState(true);
  return min1100 ? (
    <ChatListDesktop listChats={listChats} lastElementRef={lastElementRef} />
  ) : minWidth500 && minHeight500 ? (
    <ChatListTablet
      tabletActive={tabletActive}
      setTabletActive={setTabletActive}
      listChats={listChats}
      lastElementRef={lastElementRef}
    />
  ) : (
    <ChatListMobile
      listChats={listChats}
      lastElementRef={lastElementRef}
      setChatListInMobile={setChatListInMobile}
    />
  );
};

export default ChatList;
