import React, { useRef, useState } from "react";

const InputRange = () => {
  const [draggingLeft, setDraggingLeft] = useState(false);
  const [left, setLeft] = useState(0);
  const leftRef = useRef();
  const trackRef = useRef();
  const trackWidth = trackRef.current?.offsetWidth;
  const trackLeft = trackRef.current?.offsetLeft;
  const leftWidth = leftRef.current?.offsetWidth;
  const maxRight = trackWidth - leftWidth;

  window.addEventListener("mouseup", () => {
    setDraggingLeft(false);
    console.log(draggingLeft);
  });

  window.addEventListener("mousemove", (e) => {
    if (draggingLeft) {
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
        className="border-radius-50 w-20px h-20px bg-blue position-absolute"
        ref={leftRef}
        style={{ left: `${left}px` }}
        onMouseDown={(e) => {
          console.log("asd");
          setDraggingLeft(true);
        }}
      />
      <div
        onClick={() => setLeft(20)}
        style={{
          position: "absolute",
          width: "5px",
          height: "15px",
          left: "20px",
        }}
      />
    </div>
  );
};

export default InputRange;
