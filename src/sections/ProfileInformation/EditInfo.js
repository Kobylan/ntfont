import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editProfileInfo } from "../../store/actions/Profile/profileInfo";
import { editProfileAvatar } from "../../store/actions/Profile/profileAvatar";

const EditInfo = ({ avatar, profile, setEdit }) => {
  const dispatch = useDispatch();
  const [editAvatar, setEditAvatar] = useState(false);
  const [newProfile, setNewProfile] = useState(profile.data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProfile({ ...newProfile, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editProfileInfo(newProfile));
    setEdit(false);
  };
  return (
    <>
      <div className="d-flex">
        <div>
          <div
            className="rounded overflow-hidden position-relative"
            style={{
              background: `url(${avatar.data}) no-repeat 50% 50% / cover`,
              width: "120px",
              height: "120px",
            }}
            onMouseOver={() => setEditAvatar(true)}
            onMouseLeave={() => setEditAvatar(false)}
          >
            {avatar.isFetching ? (
              <div
                className="d-flex align-items-center w-100 h-100 justify-content-center"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                <div
                  className="animation-rotate border-radius-50 border-loading"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
            ) : (
              <>
                <input
                  id="image_uploads"
                  accept=".jpg, .jpeg, .png"
                  className="opacity-0"
                  type="file"
                  onChange={(e) => {
                    const formData = new FormData();
                    formData.append("file", e.target.files[0]);
                    dispatch(editProfileAvatar(formData));
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
              </>
            )}
          </div>
        </div>
        <div className="d-flex pl-15 flex-column w-100">
          <div className="d-flex">
            <div className="font-size-24">
              {newProfile.first_name} {newProfile.last_name}
            </div>
          </div>
          <div>{newProfile.bio}</div>
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
              value={newProfile.first_name}
              onChange={handleChange}
            />
          </label>
          <label className="flex-50 ml-15">
            Фамилия
            <input
              className="bg-transparent border w-100 outline-none p-5 rounded "
              type="text"
              name="last_name"
              value={newProfile.last_name}
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
              value={newProfile.instagram}
              onChange={handleChange}
            />
          </label>
          <label className="flex-50 ml-15">
            Email
            <input
              className="bg-transparent border w-100 outline-none p-5 rounded "
              type="email"
              name="email"
              value={newProfile.email}
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
            value={newProfile.bio}
            onChange={handleChange}
          />
        </label>
        <div className="d-flex justify-content-end mt-15">
          <input
            value="Отменить"
            type="button"
            className="btn-secondary align-self-end"
            onClick={() => setEdit(false)}
          />
          <input
            type="submit"
            value="Сохранить"
            className=" ml-5 btn align-self-end "
          />
        </div>
      </form>
    </>
  );
};

export default EditInfo;
