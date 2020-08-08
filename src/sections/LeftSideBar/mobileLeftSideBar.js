import React, { useState } from "react";
import { config } from "./config";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const calculateNotifications = (arr, id) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (id !== arr[i].from_user_id) {
      count = count + arr[i].messages.length;
    }
  }
  return count === 0 ? null : count;
};

const MobileLeftSideBar = () => {
  const [pathname, setPathname] = useState("");
  const [active, setActive] = useState("");
  const unreadMessages = useSelector((state) => state.chat.unreadMessages.data);
  const dialogueID = useSelector((state) => state.chat.dialogueID.id);
  return (
    <div
      className="position-absolute"
      style={{
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div
        className="w-100 position-fixed bg-dark border-top d-flex"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "1",
          maxHeight: "16vh",
          height: "3.5rem",
        }}
      >
        {config.map((item) => {
          if (item.title === "Чат") {
            return (
              <NavLink
                key={item.id}
                className={`w-100 d-flex align-items-center justify-content-center text-decoration-none p-5 ${
                  active === item.path && "hover"
                }`}
                isActive={(match, location) => {
                  setPathname(location.pathname);
                }}
                to={item.path}
              >
                <div
                  className={`icon-45 position-relative ${
                    pathname === item.path || active === item.path
                      ? "fill-white"
                      : "fill-gray"
                  }`}
                >
                  {pathname === item.path || active === item.path
                    ? item.filledIcon
                    : item.icon}
                  {calculateNotifications(unreadMessages, dialogueID) !==
                    null && (
                    <div
                      className="position-absolute bg-white text-dark rounded-circle text-align-center"
                      style={{
                        width: "16px",
                        height: "16px",
                        fontSize: "14px",
                        top: "0",
                        right: "0",
                      }}
                    >
                      {calculateNotifications(unreadMessages, dialogueID)}
                    </div>
                  )}
                </div>
              </NavLink>
            );
          } else {
            return (
              <NavLink
                onMouseEnter={() => setActive(item.path)}
                onMouseLeave={() => setActive("")}
                key={item.id}
                className={`w-100 d-flex align-items-center justify-content-center text-decoration-none p-5 ${
                  active === item.path && "hover"
                }`}
                isActive={(match, location) => {
                  setPathname(location.pathname);
                }}
                to={item.path}
              >
                <div
                  className={`icon-45 ${
                    pathname === item.path || active === item.path
                      ? "fill-white"
                      : "fill-gray"
                  }`}
                >
                  {pathname === item.path || active === item.path
                    ? item.filledIcon
                    : item.icon}
                </div>
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MobileLeftSideBar;
