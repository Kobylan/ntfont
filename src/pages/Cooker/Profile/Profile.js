import React, { useEffect, useState } from "react";
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
      "Engage, gravimetric future!To some, a spirit is a hypnosis for hearing.Small, sticky pudding is best varnished with divided worcestershire sauce.",
  },
  {
    id: "2",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
    review:
      "Instead of rinsing whole salsa verde with pumpkin seeds, use one package cracker crumps sauce and one container brown sugar grinder.The blessing of understanding masters is pure.",
  },
  {
    id: "3",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s600",
    review:
      "Luna azureus valebat est. Amors ire in tolosa! Amicitia bi-color habitio est. Cobaltum, scutum, et turpis. Consiliums mori! Sunt impositioes manifestum gratis, barbatus nuptiaes. Altus danista recte prensionems lanista est. Nunquam imperium guttus. A falsis, terror castus repressor. Mori una ducunt ad teres cobaltum. Ubi est varius usus? Onus de domesticus bulla, transferre orgia! Bullas nocere in tolosa! Varius danista sed mire reperires lura est. Lumens favere in brema! Medicina placidus scutum est. Epos barbatus historia est. Cum castor peregrinationes, omnes spatiies tractare domesticus, bassus medicinaes.",
  },
  {
    id: "4",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg",
    review:
      "The honorable politics of vision is to praise with attitude. When one needs trust and shame, one is able to feel pain. When the saint of issue views the results of the yogi, the love will know teacher. Totality happens when you meet truth so essentially that whatsoever you are becoming is your moonlight?",
  },
  {
    id: "5",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar:
      "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
    review:
      "Aw, gutless cannibal. you won't blow the bikini atoll.This plasma has only been accelerated by a post-apocalyptic c-beam.Rusticus, magnum messors saepe transferre de grandis, talis devirginato.Tobaccos are the dubloons of the small urchin.Trust, attitude and a celestine realm of dogma.",
  },
  {
    id: "6",
    name: "Adil Kairolla",
    rating: "4.5",
    avatar: "https://download-cs.net/steam/avatars/3412.jpg",
    review:
      "Where is the interstellar planet? Where is the spheroid particle? Mysterious ferengis, to the port. Carnivorous particles, to the solar system. Galaxy at the bridge was the adventure of assimilation, controlled to a futile queen!",
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
    <>
      <div className="w-100">
        <div className="min-height-30px border-box text-white w-100 mb-5 font-size-20 mt-20 d-flex justify-content-between">
          <div>Мой профиль</div>
          <div
            className="d-flex align-items-center cursor-pointer"
            onMouseEnter={() => setActive("edit")}
            onMouseLeave={() => setActive("")}
            onClick={() => setEdit(true)}
            title="Изменить профиль"
          >
            {!loading &&
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
            ) : loading ? (
              <ProfileInfoSkeleton />
            ) : (
              <ProfileInfo profile={profile} />
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="border-box text-white w-100 mt-20 mb-5 font-size-20">
          Рейтинг
        </div>
        <Rating />
      </div>

      <div className="border-box text-white w-100 mt-20 mb-5 font-size-20">
        Отзывы
      </div>
      {testdata.map((e) => (
        <Reviews key={e.id} data={e} />
      ))}
    </>
  );
};
export default Profile;
