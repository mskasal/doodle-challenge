import { create } from "zustand";

export type Message = {
  id: string;
  owner: string;
  timestamp: number;
  content: string;
};

export interface ChatState {
  messages: Message[];
  connected: boolean;
  addMessage: (message: Message) => void;
  setConnected: (isConnected: boolean) => void;
}

const chatStore = create<ChatState>(
  (set) => ({
    messages: [],
    connected: false,
    addMessage: (message: Message) =>
      set((state: ChatState) => ({ messages: [...state.messages, message] })),
    setConnected: (isConnected: boolean) =>
      set((state: ChatState) => ({ ...state, connected: isConnected })),
  }),
);

export default chatStore;
