import React, { useEffect, useState } from "react";
import { sidebarConfig } from "../configs/sidebarConfig";
import { ReactComponent as Logout } from "../assets/icons/sidebar/logout.svg";
import { ReactComponent as Logo } from "../assets/icons/sidebar/logo.svg";
import { NavLink } from "react-router-dom";
import "../assets/css/sidebar.css";
const Sidebar = () => {
  const [pathname, setPathname] = useState("");
  const [active, setActive] = useState("");
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
                onMouseEnter={() => setActive(item.path)}
                onMouseLeave={() => setActive("")}
                key={item.id}
                className="side-bar-item d-flex align-items-start max-content hover p-1"
                isActive={(match, location) => {
                  setPathname(location.pathname);
                }}
                to={item.path}
              >
                <div
                  className={`sidebar-icon__${
                    pathname === item.path || active === item.path
                      ? "active"
                      : ""
                  }`}
                >
                  {pathname === item.path || active === item.path
                    ? item.filledIcon
                    : item.icon}
                </div>
                <div
                  className={`side-bar-title ${
                    pathname === item.path && "active"
                  }`}
                >
                  {item.title}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="side-bar-item">
          <div
            className="d-flex align-items-center pointer max-content hover p-1"
            onMouseEnter={() => setActive("/logout")}
            onMouseLeave={() => setActive("")}
          >
            <div
              className={`sidebar-icon__${
                active === "/logout" ? "active" : ""
              }`}
            >
              <Logout />
            </div>
            <div className="side-bar-title">Выйти</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
