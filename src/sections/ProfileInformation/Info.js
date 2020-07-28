import React from "react";
import Skeleton from "../../components/Skeleton";

const Info = ({ avatar, profile, setEdit }) => {
  return (
    <div className="d-flex">
      <div>
        {avatar.isFetching ? (
          <Skeleton width="120" height={120} />
        ) : (
          <div
            className="rounded"
            style={{
              background: `url(${avatar.data}) no-repeat 50% 50% / cover`,
              width: "120px",
              height: "120px",
            }}
          />
        )}
      </div>
      <div className="d-flex pl-15 flex-column w-100">
        {profile.isFetching ? (
          <Skeleton width="435" height={30} />
        ) : (
          <div className="d-flex justify-content-between">
            <div className="font-size-24">
              {profile.data?.first_name} {profile.data?.last_name}
            </div>
            <div
              className="text-muted cursor-pointer"
              onClick={() => setEdit(true)}
              title="Изменить"
            >
              Изменить
            </div>
          </div>
        )}
        {profile.isFetching ? (
          <Skeleton width="435" height={80} className="mt-10" />
        ) : (
          <>
            <div className="text-break-word">{profile.data?.bio}</div>
            <div className="d-flex mt-15">
              <div className="text-muted">Instagram:</div>
              <div
                className="ml-5 text-blue cursor-pointer"
                onClick={() => {
                  window.open(`//instagram.com/${profile.data?.instagram}`);
                }}
                title="Инстаграм"
              >
                {profile.data?.instagram}
              </div>
            </div>
            <div className="d-flex mt-15 ">
              <div className="text-muted">Email:</div>
              <div
                className="ml-5 text-blue cursor-pointer"
                onClick={() => {
                  window.open(`mailto:${profile.data?.email}`);
                }}
                title="Электронная почта"
              >
                {profile.data?.email}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
