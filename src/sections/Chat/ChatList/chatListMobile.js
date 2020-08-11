import React from "react";
import ChatListElement from "./chatListElement";

const ChatListMobile = ({ listChats, lastElementRef, setMobile }) => {
  return (
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

export default ChatListMobile;
