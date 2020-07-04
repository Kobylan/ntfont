import React from "react";
import ProfileSocial from "./ProfileSocial";

const ProfileInfo = (props) => {
  const { edit, setEdit } = props;
  const renderProfileInfo = (
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
          <div className="h4"> Adil Kairolla</div>
          <div className="pr-2 text-muted">Онлайн</div>
        </div>
        <div className="info h6">
          Пеку лучште торты в форме влагалищя 😋 Девушкам делаю скидку 😜
        </div>
        <ProfileSocial />
      </div>
    </div>
  );
  const renderEditProfileInfo = (
    <div className="p-2">
      <div className="profile-info__section">
        <div>
          <img
            width={120}
            src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
            alt="Adil genius"
            className="br-3 shadow"
          />
        </div>
        <div className="profile-info__right-section">
          <div className="profile-info__section-title h4">Gaziz Kobylan</div>
          <div className="profile-info__section-body">
            Повар с большим опытом работы. Сексимастер
          </div>
        </div>
      </div>
      <div className="profile-info__section">
        <div className="profile-info__left-section">
          <div className="profile-info__section-title">Имя</div>
          <div className="profile-info__section-body">
            <input type="text" className="profile-info__section-input br-3" />
          </div>
        </div>
        <div className="profile-info__right-section">
          <div className="profile-info__section-title">Фамилия</div>
          <div className="profile-info__section-body">
            <input type="text" className="profile-info__section-input br-3" />
          </div>
        </div>
      </div>
      <div className="profile-info__section">
        <div className="profile-info__left-section">
          <div className="profile-info__section-title">Логин</div>
          <div className="profile-info__section-body">
            <input type="text" className="profile-info__section-input br-3" />
          </div>
        </div>
        <div className="profile-info__right-section">
          <div className="profile-info__section-title">e-mail</div>
          <div className="profile-info__section-body">
            <input type="text" className="profile-info__section-input br-3" />
          </div>
        </div>
      </div>
      <div>
        <div className="profile-info__section-title">Описание</div>
        <div className="profile-info__section-body">
          <textarea className="profile-info__section-textarea br-3" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <div className="btn btn-primary" onClick={() => setEdit(false)}>
          submit
        </div>
      </div>
    </div>
  );
  return edit ? renderEditProfileInfo : renderProfileInfo;
};

export default ProfileInfo;
