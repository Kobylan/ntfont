import React from "react";
import { sidebarConfig } from "../../../configs/sidebarConfig";
import logo from "../../../assets/icons/logo.svg";
import logout from "../../../assets/icons/logout.svg";
const Sidebar = () => {
  return (
    <div className="col-2 h-100 d-flex flex-column h5  justify-content-between">
      <div>
        <img className="ml-2 p-1" width={170} src={logo} alt="na|teste" />
        {sidebarConfig.map((item) => (
          <div className="wmaxc hover pointer  m-2 pl-2 pr-2 p-1 d-flex align-items-center">
            <span>{item.icon}</span>
            <span className="ml-1"> {item.title}</span>
          </div>
        ))}
      </div>
      <div className="wmaxc hover pointer d-flex mb-2 ml-2 pl-2 pr-2 p-1 align-items-center">
        <span>
          <img src={logout} width={40} alt="Выйти" />
        </span>
        <span className="ml-1">Выйти</span>
      </div>
    </div>
  );
};

export default Sidebar;
