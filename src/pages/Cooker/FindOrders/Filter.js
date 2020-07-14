import React from "react";
import InputRange from "../../../components/InputRange";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="mv-20">
      <div className="d-flex w-100 justify-content-between align-items-center text-white">
        <div className="min-width-50px">Цена:</div>
        <div className="d-flex justify-content-center min-width-50px">
          {filter.price_gte}
        </div>
        <div className="w-100">
          <InputRange
            filter={filter}
            setFilter={(e) => setFilter(e)}
            type={"price"}
          />
        </div>
        <div className="d-flex justify-content-center min-width-50px">
          {filter.price_lte}
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center text-white">
        <div className="min-width-50px">Вес:</div>
        <div className="d-flex justify-content-center min-width-50px">
          {filter.weight_gte}
        </div>
        <div className="w-100">
          <InputRange
            filter={filter}
            setFilter={(e) => setFilter(e)}
            type={"weight"}
          />
        </div>
        <div className="d-flex justify-content-center min-width-50px">
          {filter.weight_lte}
        </div>
      </div>
    </div>
  );
};

export default Filter;
