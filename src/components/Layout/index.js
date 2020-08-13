import React from "react";
import LeftSidebar from "../../sections/LeftSideBar";
import { useMedia } from "../../store/hooks/meida";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const id = useSelector((store) => store.chat.dialogueID.id);
  const minWidth1100 = useMedia("(min-width:1100px)");
  const minWidth680 = useMedia("(min-width:680px)");
  const minHeight500 = useMedia("(min-height:500px)");
  const minWidth500 = useMedia("(min-width:500px)");
  return (
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
                  minWidth500 && minHeight500 && `pg-5`
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
