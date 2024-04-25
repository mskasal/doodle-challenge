import { Message } from "../store/chatStore";
import { DateFormatter } from "../utils/dateFormatter";

type MessageListItemProps = {
  messageData: Message;
};
const MessageListItem = ({ messageData }: MessageListItemProps) => {
  const time = DateFormatter(messageData.timestamp);

  return (
    <li className="message-list-item">
      <div className="message-list-item__header">
        <b>{messageData.owner}</b>
        &#x2022;
        <small>{time}</small>
      </div>
      <p className="message-list-item__content">{messageData.content}</p>
    </li>
  );
};

export default MessageListItem;
