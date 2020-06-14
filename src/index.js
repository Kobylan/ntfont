import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import Sidebar from "./store/components/Sidebar";
import FindOrder from "./pages/Cooker/FindOrders/FindOrder";

ReactDOM.render(
  <React.StrictMode>
    <header className="d-flex w-25 align-items-end flex-column m-1">
      <Sidebar />
    </header>
    <main className="d-flex w-75 flex-grow-1">
      <div className=" flex-grow-1 w-50">
        <FindOrder />
      </div>
      <div className=" flex-grow-1">rightSidebar</div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
