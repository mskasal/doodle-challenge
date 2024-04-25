import useScrollOnPropChange from "../hooks/useScrollOnPropChange";
import { Message } from "../store/chatStore";

import MessageListItem from "./MessageListItem";

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({ messages }: MessageListProps) => {
  const listRef = useScrollOnPropChange<HTMLUListElement>(messages);

  return (
    <ul className="message-list" ref={listRef}>
      {messages.map((message: any) => (
        <MessageListItem
          key={`list-item-${message.id}`}
          messageData={message}
        />
      ))}
    </ul>
  );
};

export default MessageList;
