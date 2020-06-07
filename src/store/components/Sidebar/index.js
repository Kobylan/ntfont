import React from "react";
import { sidebarConfig } from "../../../configs/sidebarConfig";
import logo from "../../../assets/icons/logo.svg";
const Sidebar = () => {
  return (
    <div style={{ height: "100vh" }} className="col">
      <img src={logo} alt="na|teste" />
      <ul className="col-2 list-group">
        {sidebarConfig.map((item) => (
          <li className="list-group-item d-flex border-0 align-items-center">
            <span>{item.icon}</span>
            <span className="p-1"> {item.title}</span>
          </li>
        ))}
      </ul>
      <div className="col justify-content-end">
        <span className="p-1">Выйти</span>
      </div>
    </div>
  );
};

export default Sidebar;
