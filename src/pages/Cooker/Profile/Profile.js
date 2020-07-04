import React, { useState } from "react";
import ProfileSocial from "./ProfileSocial";
import { Reviews } from "./Reviews";
import { Rating } from "./Rating";
import { useGetMyProfile } from "../../../hooks/useGetMyProfile";
import { ReactComponent as Edit } from "../../../assets/icons/profile/edit.svg";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import "../../../assets/css/profile.css";
import { ReactComponent as Save } from "../../../assets/icons/todo/save.svg";
import { ReactComponent as SaveFilled } from "../../../assets/icons/todo/save-filled.svg";
import ProfileInfo from "./ProfileInfo";

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
  const [active, setActive] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <div className="card-title">
        <div>Мой профиль</div>
        <div
          className="d-flex align-items-center pointer text-muted"
          onMouseEnter={() => setActive("edit")}
          onMouseLeave={() => setActive("")}
          onClick={() => setEdit(true)}
          title="Изменить профиль"
        >
          {!edit &&
            (active === "edit" ? (
              <EditFilled className="profile-icon" />
            ) : (
              <Edit className="profile-icon" />
            ))}
        </div>
      </div>
      <div className="profile-card br-3">
        <div className="d-flex flex-column ">
          <ProfileInfo edit={edit} setEdit={(e) => setEdit(e)} />
        </div>
      </div>

      <div className="text-light   h5 pt-3">Рейтинг</div>
      <Rating />
      <div className="text-light   h5 pt-3">Отзывы</div>
      {testdata.map((e) => (
        <Reviews key={e.id} data={e} />
      ))}
    </div>
  );
};
export default Profile;
