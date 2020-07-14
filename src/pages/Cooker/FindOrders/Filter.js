import React from "react";
import InputRange from "../../../components/InputRange";

const Filter = ({ filter, setFilter }) => {
  const onSubmit = (event) => {
    console.log("submit");
  };
  return (
    <form onSubmit={onSubmit}>
      <InputRange />
      <InputRange />
    </form>
  );
};

export default Filter;
