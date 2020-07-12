import React from "react";
import Skeleton from "../../../components/Skeleton";

const ProfileInfo = (props) => {
  const { profile, loading, image } = props;
  return (
    <div className="d-flex">
      <div>
        {loading ? (
          <Skeleton width="120" height={120} />
        ) : (
          <div
            className="rounded"
            style={{
              background: `url(${image}) no-repeat 50% 50% / cover`,
              width: "120px",
              height: "120px",
            }}
          />
        )}
      </div>
      <div className="d-flex pl-15 flex-column w-100">
        {loading ? (
          <Skeleton width="435" height={30} />
        ) : (
          <div className="d-flex justify-content-between">
            <div className="font-size-24">
              {profile.first_name} {profile.last_name}
            </div>
            <div className=" text-muted">
              {profile.is_active ? "В сети" : "Не в сети"}
            </div>
          </div>
        )}
        {loading ? (
          <Skeleton width="435" height={80} className="mt-10" />
        ) : (
          <>
            <div>{profile.bio}</div>
            <div className="d-flex mt-15">
              <div className="text-muted">Instagram:</div>
              <div
                className="ml-5 text-blue cursor-pointer"
                onClick={() => {
                  window.open(`//instagram.com/${profile.instagram}`);
                }}
              >
                {profile.instagram}
              </div>
            </div>
            <div className="d-flex mt-15 ">
              <div className="text-muted">Email:</div>
              <div
                className="ml-5 text-blue cursor-pointer"
                onClick={() => {
                  window.open(`mailto:${profile.email}`);
                }}
              >
                {profile.email}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
