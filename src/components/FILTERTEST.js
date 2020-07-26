import React, { useEffect, useRef, useState } from "react";

const Filtertest = ({ filter, setFilter, type }) => {
  let draggingLeft = false;
  let draggingRight = false;
  const [drag, setDrag] = useState(false);
  const leftRef = useRef();
  const rightRef = useRef();
  const trackRef = useRef();
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(100);
  let offset = left;
  const root = document.getElementById("root").style;
  window.addEventListener("mousemove", (e) => {
    if (draggingLeft) {
      offset = e.clientX + 10 - trackRef.current?.offsetLeft;
      if (offset < 0) {
        offset = 0;
      }
      if (offset > trackRef.current?.offsetWidth) {
        offset = trackRef.current?.offsetWidth;
      }
      if ((offset / trackRef.current?.offsetWidth) * 100 >= right) {
        setRight((offset / trackRef.current?.offsetWidth) * 100);
        filter[type + "_lte"] = Math.floor(
          (offset / trackRef.current.offsetWidth) * 50000
        );
      }
      setLeft((offset / trackRef.current?.offsetWidth) * 100);
      setFilter({
        ...filter,
        [type + "_gte"]: Math.floor(
          (offset / trackRef.current.offsetWidth) * 50000
        ),
      });
    }
    if (draggingRight) {
      offset = e.clientX - 10 - trackRef.current?.offsetLeft;
      if (offset < 0) {
        offset = 0;
      }
      if (offset > trackRef.current?.offsetWidth) {
        offset = trackRef.current?.offsetWidth;
      }
      if ((offset / trackRef.current?.offsetWidth) * 100 <= left) {
        setLeft((offset / trackRef.current?.offsetWidth) * 100);
        filter[type + "_gte"] = Math.floor(
          (offset / trackRef.current.offsetWidth) * 50000
        );
      }

      setRight((offset / trackRef.current?.offsetWidth) * 100);
      setFilter({
        ...filter,
        [type + "_lte"]: Math.floor(
          (offset / trackRef.current.offsetWidth) * 50000
        ),
      });
    }
  });

  window.addEventListener("mouseup", () => {
    draggingLeft = false;
    setDrag(false);
    draggingRight = false;
    root.userSelect = "auto";
    root.cursor = "auto";
  });

  return (
    <div>
      <div
        className="bg-white w-100 h-15px position-relative mr-5 rounded"
        ref={trackRef}
      >
        <div
          className="position-absolute bg-gray"
          style={{
            left: `${left}%`,
            right: `${100 - right}%`,
            top: 0,
            bottom: 0,
            borderRadius: "3px 3px 0 0",
          }}
        />
        <div className="position-absolute zero">
          <div
            className={`position-absolute cursor-${drag ? `grabbing` : `grab`}`}
            ref={leftRef}
            style={{
              left: `${left}%`,
              top: "100%",
              marginLeft: "-20px",
              borderStyle: "solid",
              borderWidth: "10px",
              borderColor: "transparent red red transparent",
            }}
            onMouseDown={() => {
              draggingLeft = true;
              setDrag(true);
              root.cursor = "grabbing";
            }}
          />
          <div
            className={`position-absolute cursor-${drag ? `grabbing` : `grab`}`}
            ref={rightRef}
            style={{
              left: `${right}%`,
              top: "100%",
              borderStyle: "solid",
              borderWidth: "10px",
              borderColor: "transparent transparent red red",
            }}
            onMouseDown={() => {
              draggingRight = true;
              setDrag(true);
              root.cursor = "grabbing";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filtertest;
