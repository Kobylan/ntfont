import React, { useRef, useState } from "react";

const InputRange = ({ filter, setFilter, type }) => {
  const between = 21;
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(between);
  const leftRef = useRef();
  const rightRef = useRef();
  const trackRef = useRef();
  let draggingLeft = false;
  let draggingRight = false;
  let offset = left;
  let offsetR = right;
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
      offset = e.clientX - 10 - trackRef.current?.offsetLeft;
      if (offset < 0) {
        setLeft(0);
      } else if (offset >= offsetR - between) {
        setLeft(offsetR - between);
      } else {
        setLeft(offset);
      }
      setFilter({
        ...filter,
        [type + "_lte"]: (left / trackRef) * filter[type + "_gte"],
      });
    }
    if (draggingRight) {
      offsetR = e.clientX - 10 - trackRef.current?.offsetLeft;
      console.log(offsetR, offset);
      if (offsetR <= offset + between) {
        setRight(offset + between);
      } else if (
        offsetR >
        trackRef.current?.offsetWidth - rightRef.current?.offsetWidth
      ) {
        setRight(trackRef.current?.offsetWidth - rightRef.current?.offsetWidth);
      } else {
        setRight(offsetR);
      }
      setFilter({
        ...filter,
        [type + "_gte"]: Math.floor(
          (right / trackRef.current?.offsetWidth) * filter[type + "_gte"]
        ),
      });
    }
  });

  return (
    <div
      className="h-15px bg-white-gray m-20 d-flex align-items-center rounded position-relative"
      ref={trackRef}
    >
      <div
        className={`rounded w-20px h-20px bg-blue position-absolute cursor-${
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
        className={`rounded w-20px h-20px bg-blue position-absolute cursor-${
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
