import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { config } from "./config";
import Icon from "../../components/Icon";

const LeftSidebar = () => {
  const [pathname, setPathname] = useState("");
  const [active, setActive] = useState("");
  return (
    <div className="d-flex flex-column flex-grow-1 align-items-end text-white-opacity">
      <div className="d-flex flex-column align-items-end h-100 w-275px">
        <div className="d-flex flex-column justify-content-between position-fixed pg-20 h-100 w-275">
          <div>
            <div>
              <Icon name="logo" width={180} className="m-10" />
            </div>
            {config.map((item) => (
              <div key={item.id}>
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
            <Icon
              name="logout"
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
    </div>
  );
};

export default LeftSidebar;
