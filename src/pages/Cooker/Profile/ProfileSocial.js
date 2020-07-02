import React from "react";
import instagram from "../../../assets/icons/social/instagram.svg";
import telegram from "../../../assets/icons/social/telegram.svg";
import whatsapp from "../../../assets/icons/social/whatsapp.svg";

//TEST DATA WHEN NURIS SDELAET IN BD NEED FETCH IT
const socialmediadata = [
  {
    media: "instagram",
    link: "https://www.instagram.com/adilkairolla/",
  },
  {
    media: "telegram",
    link: "https://t.me/nosferatu01",
  },
  {
    media: "whatsapp",
    link: "https://www.instagram.com/adilkairolla/",
  },
];

const ProfileSocial = () => {
  return (
    <div className="profile-social pr-2">
      {
        (console.log(socialmediadata),
        socialmediadata.map((e) => (
          <img
            width={35}
            height={35}
            src={
              e.media === "instagram"
                ? instagram
                : e.media === "telegram"
                ? telegram
                : e.media === "whatsapp"
                ? whatsapp
                : null
            }
            alt="Аккаунт"
            onClick={() => window.open(e.link)}
            className="pointer ml-2 shadow-sm p-1 rounded"
          />
        )))
      }
    </div>
  );
};
export default ProfileSocial;
