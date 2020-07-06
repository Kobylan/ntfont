import React, { useEffect, useState } from "react";
import ProfileSocial from "./ProfileSocial";
import { Reviews } from "./Reviews";
import { Rating } from "./Rating";
import { ReactComponent as Edit } from "../../../assets/icons/profile/edit.svg";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import ProfileInfo from "./ProfileInfo";
import EditProfileInfo from "./EditProfileInfo";
import { useMyProfile } from "../../../hooks/useMyProfile";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";

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
  const [active, setActive] = useState("");
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState();
  const [method, setMethod] = useState("GET");
  const { loading, error, user } = useMyProfile(profile, method);
  useEffect(() => {
    setProfile(user);
  }, [user]);
  return (
    <div>
      <div className="text-white font-size-20 mt-20 d-flex justify-content-between">
        <div>Мой профиль</div>
        <div
          className="d-flex align-items-center cursor-pointer"
          onMouseEnter={() => setActive("edit")}
          onMouseLeave={() => setActive("")}
          onClick={() => setEdit(true)}
          title="Изменить профиль"
        >
          {!edit &&
            (active === "edit" ? (
              <EditFilled className="icon-30 fill-blue" />
            ) : (
              <Edit className="icon-30 fill-white" />
            ))}
        </div>
      </div>
      <div className="p-10 maxw-600px bg-white d-flex flex-column justify-content-end rounded">
        <div className="d-flex flex-column ">
          {edit ? (
            <EditProfileInfo
              setEdit={(e) => setEdit(e)}
              profile={profile}
              setProfile={(e) => setProfile(e)}
              setMethod={(e) => setMethod(e)}
            />
          ) : loading ? (
            <ProfileInfoSkeleton />
          ) : (
            <ProfileInfo profile={profile} />
          )}
        </div>
      </div>

      <div className="text-white font-size-20 mt-20 ">Рейтинг</div>
      <Rating />
      <div className="text-white font-size-20 mt-20">Отзывы</div>
      {testdata.map((e) => (
        <Reviews key={e.id} data={e} />
      ))}
    </div>
  );
};
export default Profile;
