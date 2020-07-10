import React from "react";
const ratingdata = {
  sum: 61,
  avarage: 4.45,
  rating: [
    { number: 5, value: 35 },
    { number: 4, value: 8 },
    { number: 3, value: 15 },
    { number: 2, value: 2 },
    { number: 1, value: 1 },
  ],
};

export const Rating = (props) => {
  const { rating } = props;
  console.log(ratingdata[1]);
  return (
    <div className="rounded p-15 bg-white ">
      <div className="d-flex align-items-center">
        <div className="font-size-28">Средняя оценка:</div>
        <div className="font-size-36"> {ratingdata.avarage}</div>
      </div>
      <div>
        {ratingdata.rating.map((e) => (
          <div className="d-flex pb-5  align-items-center ">
            <div className="w-10 d-flex justify-content-end">
              <div>{e.number}</div>
            </div>
            <div className="mg-10 bg-gray  w-80 h-15px rounded overflow-hidden">
              <div
                className="h-100 bg-blue"
                style={{ width: `${(e.value / ratingdata.sum) * 100}%` }}
              />
            </div>
            <div className="align-self-end w-10 pl-5">{e.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
