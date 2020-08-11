import React from "react";
import BurgerBtn from "../../../components/BurgerBtn";
import ChatListElement from "./chatListElement";

const ChatListTablet = ({
  tabletActive,
  setTabletActive,
  listChats,
  lastElementRef,
}) => {
  return (
    <div className="d-flex flex-column border-right-grey p-5">
      {tabletActive ? (
        <div onClick={() => setTabletActive(false)}>
          <BurgerBtn />
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
                    onClick={() => setTabletActive(true)}
                  >
                    <ChatListElement chat={e} />
                  </div>
                ))}
            <div className="mv-20" />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatListTablet;
