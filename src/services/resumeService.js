import api from "./api.js";

export const analyzeResume = (formData) =>
  api.post("/resume/analyze", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getResumes = () => api.get("/resume");

export const deleteResume = (resumeId) => api.delete(`/resume/${resumeId}`);
