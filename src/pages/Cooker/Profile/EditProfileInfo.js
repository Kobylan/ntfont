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
  image,
  setImage,
}) => {
  const [editAvatar, setEditAvatar] = useState(false);
  const [file, setFile] = useState();

  const handleImageUpload = () => {
    const data = new FormData();
    data.append("file", file);
    axios.post("https://thawing-reef-32246.herokuapp.com/api/avatar", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMethod("PUT");
    file && handleImageUpload();
    setTrigger((prevState) => !prevState);
    setEdit(false);
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <div
            className="rounded overflow-hidden position-relative"
            style={{
              background: `url(${image}) no-repeat 0% 0% / contain`,
              width: "120px",
              height: "120px",
            }}
            onMouseOver={() => setEditAvatar(true)}
            onMouseLeave={() => setEditAvatar(false)}
          >
            <input
              id="image_uploads"
              accept=".jpg, .jpeg, .png"
              className="opacity-0"
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setImage(() => window.URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div
              style={{ bottom: "0", fontSize: "14px" }}
              className={`${
                editAvatar ? `opacity-100` : `opacity-0`
              } position-absolute bg-dark text-white text-align-center w-100 pv-5`}
            >
              <label htmlFor="image_uploads" className=" cursor-pointer ">
                Изменить аватар
              </label>
            </div>
          </div>
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
