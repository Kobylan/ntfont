import React from "react";
import { sidebarConfig } from "../../configs/sidebarConfig";
import logout from "../../assets/icons/logout.svg";
import logo from "../../assets/icons/logo.svg";
const Sidebar = () => {
  return (
    <div className="d-flex h-100 flex-column justify-content-between">
      <div>
        <img src={logo} alt="na|teste" className="m-3" />
        {sidebarConfig.map((item) => (
          <div className="d-flex align-items-center pointer hover max-content m-2">
            <div className="ml-2 mr-2 mt-1 mb-1">{item.icon}</div>
            <div className="ml-2 mr-2 mt-1 mb-1">{item.title}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="d-flex align-items-center m-2 pointer hover max-content">
          <div>
            <img
              src={logout}
              width={30}
              alt="Выйти"
              className="ml-2 mr-2 mt-1 mb-1"
            />
          </div>
          <div className="ml-2 mr-2 mt-1 mb-1">Выйти</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
