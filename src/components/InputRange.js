import React, { useRef, useState } from "react";

const InputRange = () => {
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(20);
  const leftRef = useRef();
  const rightRef = useRef();
  const trackRef = useRef();
  let draggingLeft = false;
  let draggingRight = false;
  const root = document.getElementById("root").style;
  window.addEventListener("mouseup", () => {
    draggingLeft = false;
    draggingRight = false;
    setDrag(false);
    root.userSelect = "auto";
    root.cursor = "auto";
  });

  window.addEventListener("mousemove", (e) => {
    root.userSelect = "none";
    if (draggingLeft) {
      const offset = e.clientX - 10 - trackRef.current?.offsetLeft;
      if (offset < 0) {
        setLeft(0);
      } else if (
        offset >
        trackRef.current?.offsetWidth - leftRef.current?.offsetWidth
      ) {
        setLeft(trackRef.current?.offsetWidth - leftRef.current?.offsetWidth);
      } else {
        setLeft(offset);
      }
    }
    if (draggingRight) {
      const offset = e.clientX - 10 - trackRef.current?.offsetLeft;
      if (offset < 0) {
        setRight(0);
      } else if (
        offset >
        trackRef.current?.offsetWidth - leftRef.current?.offsetWidth - left
      ) {
        setRight(
          trackRef.current?.offsetWidth - leftRef.current?.offsetWidth - left
        );
      } else {
        setRight(offset);
      }
    }
  });

  return (
    <div
      className="h-15px bg-white-gray m-20 d-flex align-items-center rounded position-relative"
      ref={trackRef}
    >
      <div
        className={`border-radius-50 w-20px h-20px bg-blue position-absolute cursor-${
          drag ? `grabbing` : `grab`
        }`}
        ref={leftRef}
        style={{
          left: `${left}px`,
        }}
        onMouseDown={() => {
          draggingLeft = true;
          setDrag(true);
          root.cursor = "grabbing";
        }}
      />
      <div
        className={`border-radius-50 w-20px h-20px bg-dark position-absolute cursor-${
          drag ? `grabbing` : `grab`
        }`}
        ref={rightRef}
        style={{
          left: `${right}px`,
        }}
        onMouseDown={() => {
          draggingRight = true;
          setDrag(true);
          root.cursor = "grabbing";
        }}
      />
    </div>
  );
};

export default InputRange;
