import React from "react";

import LeftSidebar from "../../sections/LeftSideBar";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const resize = () => {
    const r = { width: window.innerWidth, height: window.innerHeight };
    dispatch({
      type: "SET_RESOLUTION",
      payload: r,
    });
  };
  window.addEventListener("resize", resize, false);
  return (
    <>
      <LeftSidebar />
      <div className="d-flex align-items-start flex-grow-1 flex-shrink-1">
        <div className="min-width-990px d-flex h-100 ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
