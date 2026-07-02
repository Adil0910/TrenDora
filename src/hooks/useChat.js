import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { addMessage } from "../store/chatSlice.js";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

export const useChat = (chatId) => {
  const socketRef = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!chatId) return;

    socketRef.current = io(SOCKET_URL, { withCredentials: true });
    socketRef.current.emit("join-chat", chatId);

    socketRef.current.on("receive-message", (message) => {
      dispatch(addMessage(message));
    });

    // Surfaces AI/service failures (e.g. invalid Gemini key) instead of failing silently
    socketRef.current.on("chat-error", ({ message }) => {
      setError(message);
    });

    // Surfaces socket auth/connection failures (e.g. not logged in, server down)
    socketRef.current.on("connect_error", (err) => {
      setError(`Connection failed: ${err.message}`);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [chatId, dispatch]);

  const sendMessage = (content) => {
    if (!socketRef.current) return;
    setError("");
    dispatch(addMessage({ role: "user", content, _id: Date.now() }));
    socketRef.current.emit("send-message", { chatId, content });
  };

  return { sendMessage, error };
};
