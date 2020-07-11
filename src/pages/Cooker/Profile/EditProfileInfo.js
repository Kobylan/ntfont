import React, { useState } from "react";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import * as axios from "axios";
import { readFile } from "../../../components/readFile";

const EditProfileInfo = ({
  profile,
  setProfile,
  setEdit,
  setMethod,
  setTrigger,
}) => {
  const [editAvatar, setEditAvatar] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState(profile.avatar);
  const handleImageUpload = (e) => {
    console.log(image);
    const data = new FormData();
    data.append("file", file);
    axios
      .post("https://thawing-reef-32246.herokuapp.com/api/avatar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((respond) => console.log(respond.data.file));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMethod("PUT");
    setTrigger((prevState) => !prevState);
    setEdit(false);
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <div
            className="rounded"
            style={{
              background: `url(${image}) 0% 0% / contain`,
              width: "120px",
              height: "120px",
              // backgroundSize: "contain",
            }}
            onMouseEnter={() => setEditAvatar(true)}
            onMouseLeave={() => setEditAvatar(false)}
          >
            <div className={`${editAvatar ? `opcacity-0` : `opacity-100`}`}>
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setImage(window.URL.createObjectURL(e.target.files[0]));
                  // setImage(readFile(e.target.files[0]));
                }}
              />
              <div onClick={() => handleImageUpload()}>KEK</div>
            </div>
          </div>
          {/*<img*/}
          {/*  width={120}*/}
          {/*  src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"*/}
          {/*  alt="Adil genius"*/}
          {/*  className="rounded"*/}
          {/*  onMouseEnter={() => setEditAvatar(true)}*/}
          {/*  onMouseLeave={() => setEditAvatar(false)}*/}
          {/*/>*/}
        </div>
        <div className="d-flex pl-15 flex-column w-100">
          <div className="d-flex">
            <div className="font-size-24">
              {profile.first_name} {profile.last_name}
            </div>
          </div>
          <div>{profile.bio}</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex w-100 mt-15">
          <label className="flex-50">
            Имя
            <input
              className="bg-transparent border w-100 outline-none p-5 rounded "
              type="text"
              name="first_name"
              value={profile.first_name}
              onChange={handleChange}
            />
          </label>
          <label className="flex-50 ml-15">
            Фамилия
            <input
              className="bg-transparent border w-100 outline-none p-5 rounded "
              type="text"
              name="last_name"
              value={profile.last_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <label className="flex-50">
            Instagram
            <input
              className="bg-transparent border w-100 outline-none p-5 rounded "
              type="text"
              name="instagram"
              value={profile.instagram}
              onChange={handleChange}
            />
          </label>
          <label className="flex-50 ml-15">
            Email
            <input
              className="bg-transparent border w-100 outline-none p-5 rounded "
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          Описание
          <textarea
            rows={7}
            className="bg-transparent border w-100 outline-none p-5 rounded "
            name="bio"
            value={profile.bio}
            onChange={handleChange}
          />
        </label>
        <div className="d-flex justify-content-end mt-15">
          <input
            value="Отмена"
            type="button"
            className="btn-secondary align-self-end"
            onClick={() => setEdit(false)}
          />
          <input
            type="submit"
            value="Отправить"
            className=" ml-5 btn align-self-end "
          />
        </div>
      </form>
    </>
  );
};

export default EditProfileInfo;
