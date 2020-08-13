import React, { useEffect, useState } from "react";
import InputRange from "../../components/InputRange";
import { useDispatch, useSelector } from "react-redux";
import {
  getFindOrder,
  getFindOrderByFilter,
} from "../../store/actions/FindOrder/FindOrder";

const Filter = () => {
  const [filter, setFilter] = useState({
    price_gte: 0,
    price_lte: 50000,
    weight_gte: 0,
    weight_lte: 50000,
  });
  const dispatch = useDispatch();
  // if (filter["price_lte"] < filter["price_gte"]) {
  //   setFilter({
  //     ...filter,
  //     ["price_gte"]: filter["price_lte"],
  //   });
  // }
  if (filter["price_gte"] > filter["price_lte"]) {
    setFilter({
      ...filter,
      ["price_lte"]: filter["price_gte"],
    });
  }
  // if (filter["weight_lte"] < filter["weight_gte"]) {
  //   setFilter({
  //     ...filter,
  //     ["weight_gte"]: filter["weight_lte"],
  //   });
  // }
  if (filter["weight_gte"] > filter["weight_lte"]) {
    setFilter({
      ...filter,
      ["weight_lte"]: filter["weight_gte"],
    });
  }

  return (
    <div className="mv-20 cursor-select">
      <div
        className="d-flex w-100 justify-content-between align-items-center text-white"
        style={{ marginBottom: "25px" }}
      >
        <div className="min-width-50px">Цена:</div>
        <input
          className="bg-transparent w-100 outline-none rounded text-white font-size-16 "
          style={{
            borderColor: "transparent",
            minWidth: "55px",
            maxWidth: "55px",
            textAlign: "center",
            fontFamily: "Nunito, sans-serif",
          }}
          value={filter.price_gte}
          onChange={(e) => {
            setFilter({
              ...filter,
              ["price_gte"]: isNaN(parseInt(e.target.value))
                ? 0
                : parseInt(e.target.value) >= 50000
                ? 50000
                : parseInt(e.target.value),
            });
          }}
        />
        <div className="w-100">
          <InputRange
            filter={filter}
            setFilter={(e) => setFilter(e)}
            type={"price"}
          />
        </div>
        <input
          className="bg-transparent w-100 outline-none rounded text-white font-size-16 "
          style={{
            borderColor: "transparent",
            minWidth: "55px",
            maxWidth: "55px",
            textAlign: "center",
            fontFamily: "Nunito, sans-serif",
          }}
          value={filter.price_lte}
          onChange={(e) => {
            setFilter({
              ...filter,
              ["price_gte"]:
                isNaN(parseInt(e.target.value)) < filter.price_gte
                  ? isNaN(parseInt(e.target.value))
                    ? 0
                    : parseInt(e.target.value)
                  : filter.price_gte,
              ["price_lte"]: isNaN(parseInt(e.target.value))
                ? 0
                : parseInt(e.target.value) >= 50000
                ? 50000
                : parseInt(e.target.value),
            });
          }}
        />
      </div>
      <div
        className="d-flex w-100 justify-content-between align-items-center text-white"
        style={{ marginBottom: "25px" }}
      >
        <div className="min-width-50px">Вес:</div>
        <input
          className="bg-transparent w-100 outline-none rounded text-white font-size-16 "
          style={{
            borderColor: "transparent",
            minWidth: "55px",
            maxWidth: "55px",
            textAlign: "center",
            fontFamily: "Nunito, sans-serif",
          }}
          value={filter.weight_gte}
          onChange={(e) => {
            setFilter({
              ...filter,
              ["weight_gte"]: isNaN(parseInt(e.target.value))
                ? 0
                : parseInt(e.target.value) >= 50000
                ? 50000
                : parseInt(e.target.value),
            });
          }}
        />

        <div className="w-100">
          <InputRange
            filter={filter}
            setFilter={(e) => setFilter(e)}
            type={"weight"}
          />
        </div>
        <input
          className="bg-transparent w-100 outline-none rounded text-white font-size-16 "
          style={{
            borderColor: "transparent",
            minWidth: "55px",
            maxWidth: "55px",
            textAlign: "center",
            fontFamily: "Nunito, sans-serif",
          }}
          value={filter.weight_lte}
          onChange={(e) => {
            setFilter({
              ...filter,
              ["weight_gte"]:
                isNaN(parseInt(e.target.value)) < filter.weight_gte
                  ? isNaN(parseInt(e.target.value))
                    ? 0
                    : parseInt(e.target.value)
                  : filter.weight_gte,
              ["weight_lte"]: isNaN(parseInt(e.target.value))
                ? 0
                : parseInt(e.target.value) >= 50000
                ? 50000
                : parseInt(e.target.value),
            });
          }}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <div
          className="btn"
          onClick={() => dispatch(getFindOrderByFilter(1, filter))}
        >
          Применить
        </div>
      </div>
    </div>
  );
};
export default Filter;
