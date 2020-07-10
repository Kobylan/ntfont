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
    <div className="d-flex flex-column align-items-end h-100 w-275px">
      <div className="d-flex flex-column justify-content-between position-fixed pg-20 h-100 w-275">
        <div>
          <div>
            <Logo width={180} alt="na|teste" className="m-10" />
          </div>
          {sidebarConfig.map((item) => (
            <div>
              <NavLink
                onMouseEnter={() => setActive(item.path)}
                onMouseLeave={() => setActive("")}
                key={item.id}
                className={`d-flex align-items-center text-decoration-none p-5 m-10 ${
                  active === item.path && "hover"
                }`}
                isActive={(match, location) => {
                  setPathname(location.pathname);
                }}
                to={item.path}
              >
                <div
                  className={`icon-30 ${
                    pathname === item.path || active === item.path
                      ? "fill-white"
                      : "fill-gray"
                  }`}
                >
                  {pathname === item.path || active === item.path
                    ? item.filledIcon
                    : item.icon}
                </div>
                <div
                  className={`mg-20 font-size-20 ${
                    pathname === item.path && "text-white"
                  }`}
                >
                  {item.title}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <NavLink
          onMouseEnter={() => setActive("/logout")}
          onMouseLeave={() => setActive("")}
          className={`d-flex align-items-center text-decoration-none p-5 m-10 ${
            active === "/logout" && "hover"
          }`}
          to={"/logout"}
        >
          <Logout
            className={`icon-30 ${
              active === "/logout" ? "fill-white" : "fill-gray"
            }`}
          />
          <div
            className={`mg-20 font-size-20 ${
              active === "/logout" && "text-white"
            }`}
          >
            Выйти
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
