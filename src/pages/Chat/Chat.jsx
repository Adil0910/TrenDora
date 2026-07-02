import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatSidebar from "../../components/chat/ChatSidebar.jsx";
import ChatWindow from "../../components/chat/ChatWindow.jsx";
import ChatInput from "../../components/chat/ChatInput.jsx";
import { useChat } from "../../hooks/useChat.js";
import { setChats, setActiveChat, setMessages } from "../../store/chatSlice.js";
import { createChat, getChats, getChatMessages, deleteChat } from "../../services/chatService.js";
import "./Chat.css";

const Chat = () => {
  const dispatch = useDispatch();
  const { chats, activeChatId, messages } = useSelector((state) => state.chat);
  const { sendMessage, error: chatError } = useChat(activeChatId);

  useEffect(() => {
    const loadChats = async () => {
      const { data } = await getChats();
      dispatch(setChats(data.data));
      if (data.data.length > 0) {
        dispatch(setActiveChat(data.data[0]._id));
      }
    };
    loadChats();
  }, [dispatch]);

  useEffect(() => {
    if (!activeChatId) return;
    const loadMessages = async () => {
      const { data } = await getChatMessages(activeChatId);
      dispatch(setMessages(data.data));
    };
    loadMessages();
  }, [activeChatId, dispatch]);

  const handleNewChat = async () => {
    const { data } = await createChat("New Chat");
    dispatch(setChats([data.data, ...chats]));
    dispatch(setActiveChat(data.data._id));
  };

  const handleDeleteChat = async (chatId) => {
    await deleteChat(chatId);
    const updatedChats = chats.filter((chat) => chat._id !== chatId);
    dispatch(setChats(updatedChats));
    if (activeChatId === chatId) {
      dispatch(setActiveChat(updatedChats[0]?._id || null));
    }
  };

  return (
    <div className="chat-page">
      <ChatSidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={(id) => dispatch(setActiveChat(id))}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
      />

      <div className="chat-main">
        {activeChatId ? (
          <>
            {chatError && <p className="chat-error-banner">{chatError}</p>}
            <ChatWindow messages={messages} />
            <ChatInput onSend={sendMessage} />
          </>
        ) : (
          <p className="chat-empty-state">Create a new chat to get started.</p>
        )}
      </div>
    </div>
  );
};

export default Chat;
