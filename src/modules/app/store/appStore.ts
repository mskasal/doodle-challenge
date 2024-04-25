import { create } from "zustand";

export interface AppState {
  chatFeateEnabled: boolean;
  chatOpen: boolean;
  toggleChat: () => void;
  setUserName: (name: string) => void;
  setMeetingID: (id: string) => void;
  userName: string;
  meetingID: string;
}

const appStore = create<AppState>(
  (set) => ({
    chatFeateEnabled: true,
    chatOpen: false,
    userName: "Guest",
    meetingID: "42",
    setMeetingID: (id: string) =>
      set((state: AppState) => ({ ...state, meetingID: id || "42" })),
    setUserName: (name: string) =>
      set((state: AppState) => ({ ...state, userName: name || "Guest" })),
    toggleChat: () =>
      set((state: AppState) => ({ ...state, chatOpen: !state.chatOpen })),
  }),
);

export default appStore;
