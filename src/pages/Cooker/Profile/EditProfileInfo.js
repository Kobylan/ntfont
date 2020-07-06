import React from "react";

const EditProfileInfo = (props) => {
  const { profile, setProfile, setEdit, setMethod } = props;
  return (
    <div className="p-10">
      <div className="d-flex justify-content-start">
        <div>
          <img
            width={120}
            src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
            alt="Adil genius"
            className="rounded"
          />
        </div>
        <div className="w-100 ml-15">
          <div className="font-size-24">
            {profile.first_name} {profile.last_name}
          </div>
          <div className="w-100">{profile.profile.bio}</div>
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <div className="w-100">
          <div>Имя</div>
          <div className="w-100">
            <input
              type="text"
              className="bg-transparent border w-100 outline-none p-5 rounded"
              value={profile.first_name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  first_name: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="w-100 ml-15">
          <div>Фамилия</div>
          <div className="w-100">
            <input
              type="text"
              className="bg-transparent border w-100 outline-none p-5 rounded"
              value={profile.last_name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  last_name: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <div className="w-100">
          <div>Логин</div>
          <div className="w-100">
            <input
              type="text"
              className="bg-transparent border w-100 outline-none p-5 rounded"
              value={profile.username}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  username: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="w-100 ml-15">
          <div>Электронный адрес</div>
          <div className="w-100">
            <input
              type="text"
              className="bg-transparent border w-100 outline-none p-5 rounded"
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div>Описание</div>
        <div className="w-100">
          <textarea
            className="bg-transparent border w-100 outline-none p-5 rounded"
            value={profile.profile.bio}
            onChange={(e) =>
              setProfile({
                ...profile,
                profile: {
                  ...profile.profile,
                  bio: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-10">
        <div
          className="btn"
          onClick={() => {
            setMethod("PUT");
            setEdit(false);
          }}
        >
          submit
        </div>
      </div>
    </div>
  );
};

export default EditProfileInfo;
