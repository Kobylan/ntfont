import React from "react";
import ChatList from "../../sections/Chat/ChatList";
import ChatBody from "../../sections/Chat/ChatBody";

const ChatMobile = ({ chatListInMobile, setChatListInMobile }) => {
  return chatListInMobile ? (
    <ChatList setChatListInMobile={setChatListInMobile} />
  ) : (
    <ChatBody setChatListInMobile={setChatListInMobile} />
  );
};

export default ChatMobile;
