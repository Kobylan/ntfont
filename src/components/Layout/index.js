import React from "react";

import LeftSidebar from "../../sections/LeftSideBar";
import { useMedia } from "../../store/hooks/meida";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const qwe = useSelector((store) => store.chat.dialogueID.id);
  const minWidth1100 = useMedia("(min-width:1100px)");
  const minWidth680 = useMedia("(min-width:680px)");
  const minHeight500 = useMedia("(min-height:500px)");
  const minWidth500 = useMedia("(min-width:500px)");
  console.log(qwe === 0);
  return (
    <>
      {(!minHeight500 || !minWidth500) && qwe === 0 && <LeftSidebar />}
      <div
        className={`d-flex align-items-start flex-grow-1 flex-shrink-1 ${
          !minHeight500 && `justify-content-center`
        }`}
      >
        <div
          className={`${
            minWidth1100
              ? `min-width-990px`
              : `${minWidth680 ? `min-width-600px` : `w-100`} pg-5`
          } d-flex h-100 `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
