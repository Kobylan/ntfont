import React from "react";

const useApi = (params) => {
  const { method, url, request } = params;
  const API = `https://thawing-reef-32246.herokuapp.com/api/${url}/`;
};

export default useApi;
// GET params:{}
// PUT data:
