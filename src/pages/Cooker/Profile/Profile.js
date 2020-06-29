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
    avatar:
      "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
    review:
      "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
  {
    id: "1",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
    review:
      "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
  {
    id: "1",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
    review:
      "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
  {
    id: "1",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg",
    review:
      "XTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
  {
    id: "1",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
    review:
      "SOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
  {
    id: "1",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar: "https://download-cs.net/steam/avatars/3412.jpg",
    review: "meTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXTSOmeTEXT",
  },
];

const Profile = () => {
  const { loading, error, profile } = useGetMyProfile();
  return (
    <div>
      <div className="profile-card br-3">
        <div className="d-flex flex-column ">
          <div className="p-2 d-flex">
            <div>
              <img
                width={120}
                src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
                alt="Adil genius"
                className="br-3 shadow"
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
              <ProfileSocial />
            </div>
          </div>
        </div>
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
