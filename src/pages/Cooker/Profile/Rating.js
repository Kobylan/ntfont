import React from "react";

export const Rating = (props) => {
  return (
    <div className="rounded p-20 w-100 bg-white mt-5">
      <div className="d-flex align-items-center">
        <div className="font-size-28 p-10">Средняя оценка:</div>
        <div className="font-size-36"> 4,76</div>
      </div>
      <div>
        <div className="d-flex pb-5 align-items-center">
          <div>5</div>
          <div className="mg-10 bg-gray w-100 h-15px rounded overflow-hidden">
            <div className="h-100 bg-blue" style={{ width: "50%" }} />
          </div>
          <div className="pl-5">21</div>
        </div>
        <div className="d-flex pb-5 align-items-center">
          <div>4</div>
          <div className="mg-10 bg-gray w-100 h-15px rounded overflow-hidden" />
          <div className="pl-5">3</div>
        </div>
        <div className="d-flex pb-5 align-items-center">
          <div>3</div>
          <div className="mg-10 bg-gray w-100 h-15px rounded overflow-hidden" />
          <div className="pl-5">0</div>
        </div>
        <div className="d-flex pb-5 align-items-center">
          <div>2</div>
          <div className="mg-10 bg-gray w-100 h-15px rounded overflow-hidden" />
          <div className="pl-5">1</div>
        </div>
        <div className="d-flex pb-5 align-items-center">
          <div>1</div>
          <div className="mg-10 bg-gray w-100 h-15px rounded overflow-hidden" />
          <div className="pl-5">0</div>
        </div>
      </div>
    </div>
  );
};
