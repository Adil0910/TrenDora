import "./ChatWindow.css";

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.length === 0 && (
        <p className="chat-empty-state">Start the conversation by sending a message.</p>
      )}

      {messages.map((message) => (
        <div
          key={message._id}
          className={`chat-bubble ${message.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
