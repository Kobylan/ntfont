import React from "react";
// Карта с автаром
const AvatarCard = ({ item }) => {
  return (
    <div className="d-flex w-100 mb-15 align-items-start">
      <div
        className="mr-10 top-10 position-sticky  rounded"
        style={{
          background: `url(${item.field0}) no-repeat 50% 50% / cover`,
          minWidth: "80px",
          height: "80px",
        }}
      />
      <div className="w-100 rounded bg-white p-15 d-flex flex-column text-break overflow-hidden">
        <div className="d-flex justify-content-between border-bottom font-size-20">
          <div>{item.field1}</div>
          <div>{item.field2}</div>
        </div>
        <div className="mt-10 p-10">{item.field3}</div>
        <div className="d-flex justify-content-between">
          <div className="text-muted align-self-end">{item.field6}</div>
          <div className="text-muted align-self-end">{item.field7}</div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
