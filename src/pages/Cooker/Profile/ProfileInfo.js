import React from "react";
import Skeleton from "../../../components/Skeleton";

const ProfileInfo = (props) => {
  const { profile, loading } = props;
  return (
    <div className="d-flex">
      <div>
        {loading ? (
          <Skeleton width={120} height={120} />
        ) : (
          <img
            width={120}
            src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
            alt="Adil genius"
            className="rounded"
          />
        )}
      </div>
      <div className="d-flex pl-15 flex-column w-100">
        {loading ? (
          <Skeleton height={30} />
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
          <Skeleton height={80} className="mt-10" />
        ) : (
          <>
            <div>{profile.profile.bio}</div>
            <div className="d-flex mt-15">
              <div className="text-muted">Instagram:</div>
              <div
                className="ml-5 text-blue cursor-pointer"
                onClick={() => {
                  window.open(`//instagram.com/${profile.username}`);
                }}
              >
                {profile.username}
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
