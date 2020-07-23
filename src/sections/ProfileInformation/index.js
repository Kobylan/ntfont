import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import EditInfo from "./EditInfo";
import Info from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { getProfileInfo } from "../../store/actions/Profile/profileInfo";
import { getProfileAvatar } from "../../store/actions/Profile/profileAvatar";

const ProfileInformation = () => {
  let profile = useSelector((state) => state.profile.info);
  let avatar = useSelector((state) => state.profile.avatar);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    dispatch(getProfileInfo());
    dispatch(getProfileAvatar());
  }, []);
  return (
    <>
      <Title title="Мой профиль" />
      <Card>
        {edit ? (
          <EditInfo
            avatar={avatar}
            profile={profile}
            setEdit={(e) => setEdit(e)}
          />
        ) : (
          <Info avatar={avatar} profile={profile} setEdit={(e) => setEdit(e)} />
        )}
      </Card>
    </>
  );
};

export default ProfileInformation;
