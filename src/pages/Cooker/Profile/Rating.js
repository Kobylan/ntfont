import React from "react";

export const Rating = (props) => {
  return (
    <div className="profile-rating">
      <div>
        <div className="h1">4,76</div>
      </div>
      <div>
        <div className="d-flex pb-1 align-items-center">
          <div>5</div>
          <div className="profile-rating-bar">
            <div className="profile-rating-bar-status"></div>
          </div>
          <div className="pl-1">21</div>
        </div>
        <div className="d-flex pb-1">
          <div className="pr-1\">4</div>
          <div className="profile-rating-bar"></div>
          <div className="pl-1">3</div>
        </div>
        <div className="d-flex pb-1">
          <div>3</div>
          <div className="profile-rating-bar"></div>
          <div className="pl-1">0</div>
        </div>
        <div className="d-flex pb-1">
          <div>2</div>
          <div className="profile-rating-bar"></div>
          <div className="pl-1">1</div>
        </div>
        <div className="d-flex pb-1">
          <div>1</div>
          <div className="profile-rating-bar"></div>
          <div className="pl-1">0</div>
        </div>
      </div>
    </div>
  );
};
