import React, { useEffect, useState } from "react";
import ProfileSocial from "./ProfileSocial";
import { useMyProfile } from "../../../hooks/useMyProfile";
import Loading from "../../../components/Loading";

const ProfileInfo = (props) => {
  const { edit, setEdit } = props;
  const [profile, setProfile] = useState();
  const [method, setMethod] = useState("GET");
  const { loading, error, user } = useMyProfile(profile, method);
  useEffect(() => {
    setProfile(user);
  }, [user]);
  const renderProfileInfo = (
    <div className="p-2 d-flex">
      <div>
        <img
          width={120}
          src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
          alt="Adil genius"
          className="br-3 shadow"
        />
      </div>
      <div className="d-flex pl-3 flex-column w-100">
        <div className="d-flex  justify-content-between">
          <div className="h4">
            {profile.first_name} {profile.last_name}
          </div>
          <div className="pr-2 text-muted">
            {profile.is_active ? "В сети" : "Не в сети"}
          </div>
        </div>
        <div>{profile.profile.bio}</div>
        <ProfileSocial />
      </div>
    </div>
  );
  const renderEditProfileInfo = (
    <div className="p-2">
      <div className="profile-info__section">
        <div>
          <img
            width={120}
            src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
            alt="Adil genius"
            className="br-3 shadow"
          />
        </div>
        <div className="profile-info__right-section">
          <div className="profile-info__section-title h4">
            {profile.first_name} {profile.last_name}
          </div>
          <div className="profile-info__section-body">
            {profile.profile.bio}
          </div>
        </div>
      </div>
      <div className="profile-info__section">
        <div className="profile-info__left-section">
          <div className="profile-info__section-title">Имя</div>
          <div className="profile-info__section-body">
            <input
              type="text"
              className="profile-info__section-input br-3"
              value={profile.first_name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  first_name: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="profile-info__right-section">
          <div className="profile-info__section-title">Фамилия</div>
          <div className="profile-info__section-body">
            <input
              type="text"
              className="profile-info__section-input br-3"
              value={profile.last_name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  last_name: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="profile-info__section">
        <div className="profile-info__left-section">
          <div className="profile-info__section-title">Логин</div>
          <div className="profile-info__section-body">
            <input
              type="text"
              className="profile-info__section-input br-3"
              value={profile.username}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  username: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="profile-info__right-section">
          <div className="profile-info__section-title">Электронный адрес</div>
          <div className="profile-info__section-body">
            <input
              type="text"
              className="profile-info__section-input br-3"
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div className="profile-info__section-title">Описание</div>
        <div className="profile-info__section-body">
          <textarea
            className="profile-info__section-textarea br-3"
            value={profile.profile.bio}
            onChange={(e) =>
              setProfile({
                ...profile,
                profile: {
                  ...profile.profile,
                  bio: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <div className="btn btn-primary" onClick={() => setEdit(false)}>
          submit
        </div>
      </div>
    </div>
  );
  return loading ? (
    <Loading />
  ) : edit ? (
    renderEditProfileInfo
  ) : (
    renderProfileInfo
  );
};

export default ProfileInfo;
