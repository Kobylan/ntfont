import React from "react";
import LeftSidebar from "../../sections/LeftSideBar";
import { useMedia } from "../../store/hooks/meida";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Auth from "../../pages/Auth";
const Layout = ({ children }) => {
  const pathname = useLocation().pathname;
  const id = useSelector((store) => store.chat.dialogueID.id);
  const minWidth1100 = useMedia("(min-width:1100px)");
  const minWidth680 = useMedia("(min-width:680px)");
  const minHeight500 = useMedia("(min-height:500px)");
  const minWidth500 = useMedia("(min-width:500px)");
  const loggedIn = useSelector((store) => store.loggedIn.loggedIn);
  return !loggedIn ? (
    <Auth />
  ) : (
    <>
      {(!minHeight500 || !minWidth500) && id !== 0 ? null : <LeftSidebar />}
      <div
        className={`d-flex align-items-start flex-grow-1 flex-shrink-1 ${
          !minHeight500 && `justify-content-center`
        }`}
      >
        <div
          className={`${
            minWidth1100
              ? `min-width-990px`
              : `${minWidth680 ? `min-width-600px` : `w-100`} ${
                  minWidth500 && minHeight500 && pathname === `/chat` && `pg-5`
                }`
          } d-flex h-100 `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
