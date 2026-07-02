import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import chatReducer from "./chatSlice.js";
import themeReducer from "./themeSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    theme: themeReducer,
  },
});
