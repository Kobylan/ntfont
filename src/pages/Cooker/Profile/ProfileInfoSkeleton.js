import React from "react";
import ProfileSocial from "./ProfileSocial";
import Skeleton from "../../../components/Skeleton";

const ProfileInfo = (props) => {
  const { profile } = props;
  console.log("profile-info", props);
  return (
    <div className="p-2 d-flex">
      <div>
        <Skeleton width={120} height={120} />
      </div>
      <div className="d-flex pl-3 flex-column w-100">
        <div className="d-flex  justify-content-between">
          <div className="h4">
            <Skeleton width={250} height={"1.5rem"} />
          </div>
          <div className="pr-2 text-muted">
            <Skeleton width={50} height={"1rem"} />
          </div>
        </div>
        <Skeleton width={300} height={"4.5rem"} />
        <div className="profile-social pr-2">
          <Skeleton width={100} height={35} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
