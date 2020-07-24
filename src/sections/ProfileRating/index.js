import React, { useEffect } from "react";
import Rating from "../../components/Rating";
import Title from "../../components/Title";
import { getProfileRating } from "../../store/actions/Profile/profileRating";
import { useDispatch, useSelector } from "react-redux";

const ProfileRating = () => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.profile.rating);
  useEffect(() => {
    dispatch(getProfileRating());
  }, []);
  return (
    <>
      <Title title="Рейтинг" />
      <Rating loading={rating.isFetching} rating={rating.data} />
    </>
  );
};

export default ProfileRating;
