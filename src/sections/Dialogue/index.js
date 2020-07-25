import React from "react";
import Icon from "../../components/Icon";
import { editProfileAvatar } from "../../store/actions/Profile/profileAvatar";

const Dialogue = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
      <div className="h-50px position-absolute bg-white z-1 w-100 rounded-right border-bottom d-flex align-items-center">
        <div className="ml-20 ">AVATAR</div>
        <div className="ml-20">Name</div>
      </div>
      <div className="h-100 d-flex flex-column">
        <div className="d-flex flex-column justify-content-end h-100 rounded-right">
          BODY
        </div>
        <div className="h-50px  rounded-right border-top d-flex justify-content-between">
          <label
            htmlFor="image_uploads"
            className="cursor-pointer p-10 d-flex align-items-center hover-blue"
          >
            <Icon name="add-file" width="40px" height="40px" />
            <input
              id="image_uploads"
              accept=".jpg, .jpeg, .png"
              style={{ width: "0px", height: "0px" }}
              type="file"
              onChange={(e) => {
                // const formData = new FormData();
                // formData.append("file", e.target.files[0]);
                // dispatch(editProfileAvatar(formData));
              }}
            />
          </label>
          <input
            type="text"
            placeholder="Напишите новое сообщение"
            className="w-100 m-5 outline-none bg-white-gray border-transparent rounded  "
          />
          <div className="cursor-pointer p-10 d-flex align-items-center hover-blue">
            <Icon name="send" width="40px" height="40px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
