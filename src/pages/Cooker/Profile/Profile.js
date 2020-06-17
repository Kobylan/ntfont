import React from "react";
import ProfileSocial from "./ProfileSocial";
import { Reviews } from "./Reviews";
import { Rating } from "./Rating";
import { useGetMyProfile } from "../../../store/hooks/useGetMyProfile";

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
      <div className="profile-card">
        <div className="d-flex">
          <div className="p-2">
            <img
              width={100}
              className="rounded-circle border border-success "
              src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
              alt="Adil dalbaeb"
            />
          </div>

          <div className=" mt-4">
            <div className="d-flex">
              <div className="h4"> Adil Kairolla</div>
              <Rating />
            </div>
            <div className="info h7">
              Пеку лучште торты в форме влагалищя 😋 Девушкам делаю скидку 😜
            </div>
          </div>
        </div>
      </div>
      <ProfileSocial />
      {testdata.map((e) => (
        <Reviews key={e.id} data={e} />
      ))}
    </div>
  );
};
export default Profile;
