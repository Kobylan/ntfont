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
    <div className="w-100 d-flex justify-content-end pr-10">
      {
        (console.log(socialmediadata),
        socialmediadata.map((e) => (
          <img
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
            className="cursor-pointer ml-10 p-5 rounded icon-30"
          />
        )))
      }
    </div>
  );
};
export default ProfileSocial;
