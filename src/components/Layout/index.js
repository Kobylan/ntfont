import React from "react";

import LeftSidebar from "../../sections/LeftSideBar";

const Layout = ({ children }) => {
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
