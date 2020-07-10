import React from "react";
import Skeleton from "../../../components/Skeleton";

const ProfileInfo = (props) => {
  const { profile } = props;
  return (
    <div className="d-flex">
      <div>
        <Skeleton width={120} height={120} />
      </div>
      <div className="d-flex pl-15 flex-column w-100">
        <div>
          <Skeleton width={150} height={30} />
        </div>
        <div className="mt-10">
          <Skeleton width={300} height={"4.5rem"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
