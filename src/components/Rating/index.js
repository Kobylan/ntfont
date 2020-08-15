import React from "react";
import Skeleton from "../Skeleton";
import Card from "../Card";

const Rating = ({ loading, rating }) => {
  const renderRating = [];
  for (let i = 0; i < 5; i++) {
    renderRating.push(
      <div className="d-flex pb-5 align-items-center ">
        {loading ? (
          <Skeleton height={25} width="570" className="mg-10" />
        ) : (
          <>
            <div className="w-10 d-flex justify-content-end">
              <div>{rating?.counts[i].number}</div>
            </div>
            <div className="mg-10 bg-gray w-80 h-15px rounded overflow-hidden">
              <div
                className="h-100 bg-blue animation-rating"
                style={{
                  width: `${
                    (rating?.counts[i].value === 0
                      ? 0
                      : rating?.counts[i].value / rating?.quantity) * 100
                  }%`,
                }}
              />
            </div>
            <div className="align-self-end w-10">{rating?.counts[i].value}</div>
          </>
        )}
      </div>
    );
  }
  return (
    <Card>
      {loading ? (
        <Skeleton height={35} width="330" className="mb-10" />
      ) : (
        <div className="d-flex align-items-center">
          <div className="font-size-28">Средняя оценка:</div>
          <div className="font-size-36"> {rating?.average}</div>
        </div>
      )}
      <div>{renderRating}</div>
    </Card>
  );
};

export default Rating;
