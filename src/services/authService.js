import api from "./api.js";

export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

export const logoutUser = () => api.post("/auth/logout");

export const getProfile = () => api.get("/user/profile");

export const updateProfile = (data) => api.put("/user/profile", data);
