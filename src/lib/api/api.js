import axios from "axios";

const auth = window.btoa(`ohtmm:${process.env.REACT_APP_GITHUB_API_KEY}`);
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `basic ${auth}`
  }
});

export const getIssuePage = async (pageParam = 1, options = {}) => {
  const response = await api.get(
    `issues?sort=comments&page=${pageParam}`,
    options
  );
  console.log(response);
  return response.data;
};
