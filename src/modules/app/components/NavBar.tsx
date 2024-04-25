import { useStore } from "zustand";
import appStore from "../store/appStore";

const NavBar = () => {
  const { toggleChat, meetingID } = useStore(appStore);

  return (
    <nav>
      <button
        className="chat-toggle-button"
        onClick={toggleChat}
        disabled={!meetingID.length}
      >
        Chat
      </button>
    </nav>
  );
};

export default NavBar;
