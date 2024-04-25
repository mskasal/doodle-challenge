import { FormEvent } from "react";

type MessageInputProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
const MessageInput = ({ onSubmit }: MessageInputProps) => {
  return (
    <form className="message-composer" onSubmit={onSubmit}>
      <input type="text" name="message" placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
