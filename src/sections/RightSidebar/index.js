import React from "react";
import Calendar from "./Calendar";
import Footer from "./Footer";
import { useMedia } from "../../store/hooks/meida";

const RightSidebar = () => {
  const show = useMedia("(min-width:1100px)");
  return (
    show && (
      <div className="w-350px h-100">
        <div className="d-flex flex-column h-100">
          <Calendar />
          <Footer />
        </div>
      </div>
    )
  );
};

export default RightSidebar;
