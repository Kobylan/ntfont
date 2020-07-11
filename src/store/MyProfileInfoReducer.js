import axios from "axios";
import { useReducer } from "react";

const reduce = (state, action) => {
  switch (action.type) {
    case "OnSuccess":
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case "OnFailure":
      return {
        loading: false,
        user: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};
const MyProfileInfoReducer = (state, action) => {
  const [initialState, dispatch] = useReducer(reduce, state);
  switch (action.type) {
    case "GET":
      return axios({
        method: "GET",
        url: `https://thawing-reef-32246.herokuapp.com/api/myprofile/`,
      }).then((res) => dispatch({ type: "OnSuccess", payload: res.data }));
    default:
      return state;
  }
};

export default MyProfileInfoReducer;
