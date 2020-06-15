import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import Sidebar from "./store/components/Sidebar";
import FindOrder from "./pages/Cooker/FindOrders/FindOrder";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Sidebar />
    </header>
    <main>
      <div className="main-container">
        <div className="main-content">
          <FindOrder />
          <div className="right-side">somecontent</div>
        </div>
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
