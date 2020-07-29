import React, { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../../components/Icon";
import Skeleton from "../../components/Skeleton";
import AvatarCard from "../../components/AvatarCard";
import Loader from "../../components/Loader";

const Dialogues = ({ data, setCurrentDialogue }) => {
  return (
    <>
      <div className="w-390px d-flex flex-column h-100 position-relative border-right-grey">
        <div
          className="h-100 rounded-left p-20 w-100"
          style={{ overflow: "hidden auto" }}
        >
          {data.map((e) => (
            <a
              className="d-flex align-items-center m-10"
              onClick={() => {
                setCurrentDialogue(e.id);
              }}
            >
              <div
                className="rounded-circle"
                style={{
                  background: `url(${e.avatar}) no-repeat 50% 50% / cover`,
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="ml-20">{e.first_name}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dialogues;
