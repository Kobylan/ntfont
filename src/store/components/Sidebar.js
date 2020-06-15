import React from "react";
import { sidebarConfig } from "../../configs/sidebarConfig";
import logout from "../../assets/icons/logout.svg";
import logo from "../../assets/icons/logo.svg";
import { history } from "../../history";
const Sidebar = () => {
  return (
    <div className="left-side-container ">
      <div className="left-side-content">
        <div>
          <div>
            <img src={logo} width={180} alt="na|teste" className="logo" />
          </div>
          {sidebarConfig.map((item) => (
            <div
              className="side-bar-item"
              onClick={() => history.push(item.path)}
            >
              <div
                key={item.id}
                className="d-flex align-items-start pointer max-content hover p-1"
              >
                <div className="side-bar-icon">{item.icon}</div>
                <div className="side-bar-title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="side-bar-item">
          <div className="d-flex align-items-center pointer max-content hover p-1">
            <div>
              <img
                src={logout}
                width={30}
                alt="Выйти"
                className="side-bar-icon"
              />
            </div>
            <div className="side-bar-title">Выйти</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
