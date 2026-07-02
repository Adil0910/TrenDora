import { MdAdd, MdDelete } from "react-icons/md";
import "./ChatSidebar.css";

const ChatSidebar = ({ chats, activeChatId, onSelectChat, onNewChat, onDeleteChat }) => {
  return (
    <div className="chat-sidebar">
      <button className="chat-new-btn" onClick={onNewChat}>
        <MdAdd /> New Chat
      </button>

      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat._id}
            className={`chat-list-item ${chat._id === activeChatId ? "chat-list-item-active" : ""}`}
            onClick={() => onSelectChat(chat._id)}
          >
            <span className="chat-list-title">{chat.title}</span>
            <button
              className="chat-delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteChat(chat._id);
              }}
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
