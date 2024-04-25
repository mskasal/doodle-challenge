import { useStore } from "zustand";
import appStore from "./store/appStore";

import ChatApp from "../chat/Chat";
import NavBar from "./components/NavBar";
import PlaceholderContent from "./components/PlaceholderContent";

import "./App.css";

function App() {
  const { chatFeateEnabled, meetingID } = useStore(appStore);
  return (
    <>
      <NavBar />
      <PlaceholderContent />
      {chatFeateEnabled && meetingID && <ChatApp />}
    </>
  );
}

export default App;
