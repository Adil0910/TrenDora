import api from "./api.js";

export const generateCode = (description, language) =>
  api.post("/ai/generate-code", { description, language });

export const fixBug = (code, language, errorMessage) =>
  api.post("/ai/fix-bug", { code, language, errorMessage });
