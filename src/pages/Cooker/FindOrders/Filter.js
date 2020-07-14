import React from "react";
import InputRange from "../../../components/InputRange";

const Filter = ({ filter, setFilter }) => {
  return (
    <form>
      <InputRange
        filter={filter}
        setFilter={(e) => setFilter(e)}
        type={"price"}
      />
      <InputRange
        filter={filter}
        setFilter={(e) => setFilter(e)}
        type={"weight"}
      />
    </form>
  );
};

export default Filter;
