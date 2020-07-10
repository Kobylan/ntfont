import { useEffect, useState } from "react";
import axios from "axios";

export const useMyProfile = (request, method) => {
  console.log(request, method);
  const [loadingMyProfile, setLoadingMyProfile] = useState(true);
  const [errorMyProfile, setErrorMyProfile] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setLoadingMyProfile(true);
    setErrorMyProfile(false);
    let cancel;
    switch (method) {
      case "GET":
        axios({
          method: "GET",
          url: "https://thawing-reef-32246.herokuapp.com/api/myprofile/",
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
          .then((res) => {
            setUser(res.data);
            setLoadingMyProfile(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
            setErrorMyProfile(true);
            setLoadingMyProfile(false);
          });
        break;
      case "PUT":
        axios({
          method: "PUT",
          url: "https://thawing-reef-32246.herokuapp.com/api/myprofile/",
          data: request,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
          .then((res) => {
            setUser(res.data);
            setLoadingMyProfile(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
            setErrorMyProfile(true);
            setLoadingMyProfile(false);
          });
        break;
    }
    return () => cancel();
  }, [method]);
  return { loadingMyProfile, errorMyProfile, user };
};
