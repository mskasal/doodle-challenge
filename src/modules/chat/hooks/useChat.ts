import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import chatStore, { Message } from "../store/chatStore";

const wsUrl = "ws://localhost:7890";

interface UseChatSocet {
  meetingID: string;
}

type MessagePreview = Omit<Message, "id" | "timestamp">;

function useChatSocket({ meetingID }: UseChatSocet) {
  const { readyState, sendJsonMessage, lastJsonMessage } = useWebSocket(
    `${wsUrl}/${meetingID}`,
  );

  useEffect(() => {
    if (lastJsonMessage) {
      chatStore.getState().addMessage(lastJsonMessage as Message);
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    const connected = readyState === ReadyState.OPEN;
    chatStore.getState().setConnected(connected);
  }, [readyState]);

  const sendChatMessage = (message: MessagePreview) => sendJsonMessage(message);

  return { sendChatMessage, lastJsonMessage };
}

export default useChatSocket;
