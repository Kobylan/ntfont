import { useEffect, useState } from "react";
import axios from "axios";

export const useMyProfile = (request, method) => {
  console.log(request, method);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
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
            setLoading(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
            setError(true);
            setLoading(false);
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
            setLoading(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
            setError(true);
            setLoading(false);
          });
        break;
    }
    return () => cancel();
  }, [method]);
  return { loading, error, user };
};
