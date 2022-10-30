import axios from "axios";

export const API = (() => {
  const auth = window.btoa(`ohtmm:${process.env.REACT_APP_GITHUB_API_KEY}`);
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}?sort=comments`,
    headers: {
      Authorization: `basic ${auth}`
    }
  });

  return {
    getData: async () => {
      try {
        const response = await instance.get("");
        const issuesData = response.data;
        return issuesData;
      } catch (error) {
        console.error(error);
        return;
      }
    }
  };
})();
