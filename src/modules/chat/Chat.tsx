import chatStore from "./store/chatStore";
import appStore from "../app/store/appStore";

import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";

import "./Chat.css";
import useChatSocket from "./hooks/useChat";

const ChatApp = () => {
  const { messages, connected } = chatStore();
  const { chatOpen, meetingID, userName, toggleChat } = appStore();
  const { sendChatMessage } = useChatSocket({ meetingID });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const message = event.target.elements.message.value;

    sendChatMessage({
      owner: userName,
      content: message,
    });

    event.target.elements.message.value = "";
  };

  const chatOpenClass = chatOpen ? "open" : "closed";

  return (
    <div className={`chat-app chat-app--${chatOpenClass}`}>
      <div className="chat-app__header">
        <h3>
          Meeting Chat
        </h3>
        <button onClick={toggleChat}>&#x2715;</button>
      </div>

      {connected
        ? (
          <>
            <MessageList messages={messages} />
            <MessageInput onSubmit={handleSubmit} />
          </>
        )
        : <i className="connection">Connecting to chat server...</i>}
    </div>
  );
};

export default ChatApp;
