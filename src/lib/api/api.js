import axios from "axios";
import { Octokit } from "octokit";
import { useContext } from "react";
import { IssueContext } from "../states/IssueProvider";

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
  return response.data;
};

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_API_KEY
});

export const getRepository = (async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "angular",
    repo: "angular-cli"
  });
  return response.data;
})();
