import React from "react";
import Skeleton from "../../../components/Skeleton";
import useMyProfileRating from "../../../hooks/useMyProfileRating";

export const Rating = () => {
  const { loadingRating, rating } = useMyProfileRating();
  return (
    <div className="rounded p-15 bg-white ">
      {loadingRating ? (
        <Skeleton height={35} width="330" className="mb-10" />
      ) : (
        <div className="d-flex align-items-center">
          <div className="font-size-28">Средняя оценка:</div>
          <div className="font-size-36"> {rating.average}</div>
        </div>
      )}
      <div>
        {rating.counts?.map((count) => (
          <div className="d-flex pb-5 align-items-center ">
            {loadingRating ? (
              <Skeleton height={25} width="570" className="mg-10" />
            ) : (
              <>
                <div className="w-10 d-flex justify-content-end">
                  <div>{count.number}</div>
                </div>
                <div className="mg-10 bg-gray w-80 h-15px rounded overflow-hidden">
                  <div
                    className="h-100 bg-blue animation-rating"
                    style={{
                      width: `${(count.value / rating.quantity) * 100}%`,
                    }}
                  />
                </div>
                <div className="align-self-end w-10">{count.value}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
