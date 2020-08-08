import React from "react";
import { useMedia } from "../../store/hooks/meida";
import DesktopLeftSideBar from "./desktopLeftSideBar";
import MobileLeftSideBar from "./mobileLeftSideBar";
const LeftSidebar = () => {
  const minWidth = useMedia("(min-width:500px)");
  const minHeight = useMedia("(min-height:500px)");

  return minWidth && minHeight ? <DesktopLeftSideBar /> : <MobileLeftSideBar />;
};

export default LeftSidebar;
