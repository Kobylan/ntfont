import React, { useEffect, useState } from "react";
import InputRange from "../../components/InputRange";
import { useDispatch, useSelector } from "react-redux";
import { getFindOrder } from "../../store/actions/FindOrder/FindOrder";

const Filter = () => {
  const [filter, setFilter] = useState({
    price_gte: 0,
    price_lte: 50000,
    weight_gte: 0,
    weight_lte: 50000,
  });
  const dispatch = useDispatch();

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
      <div className="d-flex justify-content-end mt-5">
        <div className="btn" onClick={() => dispatch(getFindOrder(1, filter))}>
          Применить
        </div>
      </div>
    </div>
  );
};
export default Filter;
