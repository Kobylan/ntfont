import React, { useCallback, useEffect, useRef, useState } from "react";
import { Reviews } from "./Reviews";
import { Rating } from "./Rating";
import { ReactComponent as Edit } from "../../../assets/icons/profile/edit.svg";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import ProfileInfo from "./ProfileInfo";
import EditProfileInfo from "./EditProfileInfo";
import { useMyProfile } from "../../../hooks/useMyProfile";
import Loading from "../../../components/Loading";
import useMyProfileReview from "../../../hooks/useMyProfileReview";
import useMyProfileRating from "../../../hooks/useMyProfileRating";

const Profile = () => {
  const [active, setActive] = useState("");
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState();
  const [method, setMethod] = useState("GET");
  const [reviewsPage, setReviewsPage] = useState(1);
  const { loadingMyProfile, user } = useMyProfile(profile, method);
  const { loadingReview, reviews, hasMore } = useMyProfileReview(reviewsPage);
  useEffect(() => {
    setProfile(user);
  }, [user]);

  const observer = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (loadingReview) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setReviewsPage(reviewsPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingReview, hasMore]
  );

  return (
    <>
      <div className="w-100">
        <div className="min-height-30px text-white w-100 mb-5 font-size-20 mt-20 d-flex justify-content-between">
          <div>Мой профиль</div>
          <div
            className="d-flex align-items-center cursor-pointer"
            onMouseEnter={() => setActive("edit")}
            onMouseLeave={() => setActive("")}
            onClick={() => setEdit(true)}
            title="Изменить профиль"
          >
            {!loadingMyProfile &&
              !edit &&
              (active === "edit" ? (
                <EditFilled
                  className="icon-30 fill-blue"
                  onClick={() => setActive("")}
                />
              ) : (
                <Edit className="icon-30 fill-white" />
              ))}
          </div>
        </div>
        <div className="p-15 max-width-600px bg-white d-flex flex-column justify-content-end rounded">
          <div className="d-flex flex-column ">
            {edit ? (
              <EditProfileInfo
                setEdit={(e) => setEdit(e)}
                profile={profile}
                setProfile={(e) => setProfile(e)}
                setMethod={(e) => setMethod(e)}
              />
            ) : (
              <ProfileInfo profile={profile} loading={loadingMyProfile} />
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="text-white w-100 mt-20 mb-5 font-size-20">Рейтинг</div>
        <Rating />
      </div>

      <div className="text-white w-100 mt-20 mb-5 font-size-20">Отзывы</div>

      {reviews.map((review) => (
        <div ref={lastOrderElementRef} key={review.id}>
          <Reviews review={review} loading={loadingMyProfile} />
        </div>
      ))}
      {loadingReview && <Loading />}
    </>
  );
};
export default Profile;
