import React, { useEffect, useState } from "react";
import { sidebarConfig } from "../../configs/sidebarConfig";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import "../../assets/css/sidebar.css";
const Sidebar = () => {
  return (
    <div className="left-side-container">
      <div className="left-side-content">
        <div>
          <div>
            <Logo width={180} alt="na|teste" className="logo" />
          </div>
          {sidebarConfig.map((item) => (
            <div>
              <NavLink
                key={item.id}
                className="side-bar-item d-flex align-items-start max-content hover p-1"
                to={item.path}
                activeClassName="active"
              >
                <div className="side-bar-icon">{item.icon}</div>
                <div className={`side-bar-title`}>{item.title}</div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="side-bar-item">
          <div className="d-flex align-items-center pointer max-content hover p-1">
            <div>
              <Logout width={30} className="side-bar-icon" />
            </div>
            <div className="side-bar-title">Выйти</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
