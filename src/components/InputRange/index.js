import React, { useEffect, useRef, useState } from "react";

const InputRange = ({ filter, setFilter, type }) => {
  const between = 21;
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(-21);
  const [right, setRight] = useState(0);
  const leftRef = useRef();
  const rightRef = useRef();
  const trackRef = useRef();
  let draggingLeft = false;
  let draggingRight = false;
  let offset = left;
  let offsetR = right;
  useEffect(() => {
    setRight(trackRef.current?.offsetWidth - rightRef.current?.offsetWidth);
  }, [trackRef.current?.offsetWidth]);
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
        offset = 0;
      } else if (offset >= offsetR - between) {
        offset = offsetR;
      }
      setLeft(offset - 21);
      setFilter({
        ...filter,
        [type + "_gte"]: Math.floor(
          (offset / trackRef.current.offsetWidth) * 50000
        ),
      });
    }
    if (draggingRight) {
      offsetR = e.clientX - 10 - trackRef.current?.offsetLeft;
      if (offsetR <= offset + between) {
        offsetR = offset + between;
      } else if (
        offsetR >
        trackRef.current?.offsetWidth - rightRef.current?.offsetWidth
      ) {
        offsetR = trackRef.current?.offsetWidth - rightRef.current?.offsetWidth;
      }
      setRight(offsetR);
      setFilter({
        ...filter,
        [type + "_lte"]: Math.floor(
          (offsetR / trackRef.current?.offsetWidth) * 50000
        ),
      });
    }
  });

  return (
    <div className="h-15px bg-white-gray w-100 rounded d-flex justify-content-end">
      <div
        className="h-15px d-flex align-items-center rounded position-relative"
        ref={trackRef}
        style={{ width: "calc(100% - 21px)" }}
      >
        <div
          className={`transform-rotate-180 rounded pl-20 w-20px h-20px bg-blue position-absolute cursor-${
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
    </div>
  );
};

export default InputRange;
