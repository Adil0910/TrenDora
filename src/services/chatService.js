import api from "./api.js";

export const createChat = (title) => api.post("/chat", { title });

export const getChats = () => api.get("/chat");

export const getChatMessages = (chatId) => api.get(`/chat/${chatId}/messages`);

export const deleteChat = (chatId) => api.delete(`/chat/${chatId}`);

export const sendMessageRest = (chatId, content) =>
  api.post(`/chat/${chatId}/messages`, { content });
