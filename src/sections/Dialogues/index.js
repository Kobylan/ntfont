import React from "react";
import Icon from "../../components/Icon";

const testData = [
  { id: 1, name: "Adil Kairolla" },
  { id: 2, name: "Adil Kairolla" },
  { id: 3, name: "Adil Kairolla" },
  { id: 4, name: "Adil Kairolla" },
  { id: 5, name: "Adil Kairolla" },
  { id: 6, name: "Adil Kairolla" },
];

const Dialogues = (loading, data) => {
  return (
    <div className="w-390px d-flex flex-column h-100 position-relative border-right-grey">
      <div
        className="h-100 rounded-left p-20"
        style={{ overflow: "hidden auto" }}
      >
        {testData.map((e) => (
          <a className="d-flex align-items-center m-10">
            <div
              className="bg-blue rounded-circle"
              style={{ width: "50px", height: "50px" }}
            >
              1
            </div>
            <div className="ml-20">{e.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dialogues;
