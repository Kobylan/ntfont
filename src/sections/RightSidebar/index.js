import React from "react";
import Calendar from "./Calendar";
import Footer from "./Footer";

const RightSidebar = () => {
  return (
    <div className="w-350px h-100">
      <div className="d-flex flex-column h-100">
        <Calendar />

        <Footer />
      </div>
    </div>
  );
};

export default RightSidebar;
