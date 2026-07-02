import api from "./api.js";

export const getGithubProfile = (username) => api.get(`/github/${username}`);

export const getGithubRepos = (username) => api.get(`/github/${username}/repos`);
