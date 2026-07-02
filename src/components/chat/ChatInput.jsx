import { useState } from "react";
import { MdSend } from "react-icons/md";
import "./ChatInput.css";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form className="chat-input-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="chat-input-field"
      />
      <button type="submit" className="chat-send-btn">
        <MdSend />
      </button>
    </form>
  );
};

export default ChatInput;
