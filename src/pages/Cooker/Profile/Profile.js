import React from "react";
import ProfileSocial from "./ProfileSocial";
import { Reviews } from "./Reviews";
import { Rating } from "./Rating";
import { useGetMyProfile } from "../../../store/hooks/useGetMyProfile";
import "../../../assets/css/profile.css";

const testdata = [
  {
    id: "1",
    name: "Adil Kairolla",
    rating: "4.5",
    review: "SOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
  {
    id: "2",
    name: "Koba Gaziz",
    rating: "4.5",
    review:
      "LOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEKLOLKEK",
  },
  {
    id: "3",
    name: "Nurisam Askar",
    rating: "4.5",
    review: "SOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
];

const Profile = () => {
  const { loading, error, profile } = useGetMyProfile();
  return (
    <div>
      <div className="profile-card ">
        <div className="d-flex flex-column ">
          <div className="p-2 d-flex">
            <div>
              <img
                width={120}
                src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
                alt="Adil dalbaeb"
              />
            </div>
            <div className="d-flex pl-3 pt-1   flex-column w-100">
              <div className="d-flex  justify-content-between">
                <div className=" h4"> Adil Kairolla</div>
                <div className="pr-2 text-muted">Онлайн</div>
              </div>
              <div className="info h6">
                Пеку лучште торты в форме влагалищя 😋 Девушкам делаю скидку 😜
              </div>
            </div>
          </div>
        </div>
        <ProfileSocial />
      </div>

      <div className="text-light   h5 pt-3">Рейтинг пользователя</div>
      <Rating />
      <div className="text-light   h5 pt-3">Отзывы</div>
      {testdata.map((e) => (
        <Reviews key={e.id} data={e} />
      ))}
    </div>
  );
};
export default Profile;
