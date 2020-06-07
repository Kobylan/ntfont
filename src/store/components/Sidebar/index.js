import React from 'react';
import {sidebarConfig} from "../../../configs/sidebarConfig"
const Sidebar = () => {
    return (
        <div className="row">
        <ul className="col-2 list-group">
        {sidebarConfig.map(item => (
                    <li className="list-group-item d-flex border-0 align-items-center">
                        <span>{item.icon}</span>
                        <span className="p-1"> {item.title}</span>
                    </li>
            ))}
        </ul>
        </div>
    );
};

export default Sidebar;