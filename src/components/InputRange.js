import React, { useRef, useState } from "react";

const InputRange = () => {
  let draggingLeft = false;
  const [left, setLeft] = useState(0);
  const leftRef = useRef();
  const trackRef = useRef();
  const trackWidth = trackRef.current?.offsetWidth;
  const trackLeft = trackRef.current?.offsetLeft;
  const leftWidth = leftRef.current?.offsetWidth;
  const maxRight = trackWidth - leftWidth;
  const grabOrGrabbing = draggingLeft ? "grabbing" : "grab";
  window.addEventListener("mouseup", () => {
    draggingLeft = false;
    document.getElementById("root").style.userSelect = "auto";
    document.getElementById("root").style.cursor = "auto";
  });

  window.addEventListener("mousemove", (e) => {
    if (draggingLeft) {
      document.getElementById("root").style.userSelect = "none";
      const offset = e.clientX - 10 - trackLeft;
      if (offset < 0) {
        setLeft(0);
      } else if (offset > maxRight) {
        setLeft(maxRight);
      } else {
        setLeft(offset);
      }
    }
  });

  return (
    <div
      className="h-15px bg-white-gray m-20 d-flex align-items-center rounded position-relative"
      ref={trackRef}
    >
      <div
        className="border-radius-50 w-20px h-20px bg-blue position-absolute "
        ref={leftRef}
        style={{
          left: `${left}px`,
          cursor: `${grabOrGrabbing}`,
        }}
        onMouseDown={() => {
          draggingLeft = true;
          document.getElementById("root").style.cursor = "grabbing";
        }}
      />
    </div>
  );
};

export default InputRange;
