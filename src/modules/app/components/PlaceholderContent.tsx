import { useStore } from "zustand";
import appStore from "../store/appStore";

const PlaceholderContent = () => {
  const { userName, meetingID, setUserName, setMeetingID } = useStore(appStore);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    const userName = event.target.elements.userName.value;
    const meetingID = event.target.elements.meetingID.value;

    setUserName(userName);
    setMeetingID(meetingID);
  };

  return (
    <main className="placeholder-content">
      <h3>
        Placeholder Content
      </h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="userName">
          Username
          <input id="userName" placeholder={userName} name="userName" />
        </label>
        <label htmlFor="meetingID">
          Meeting id
          <input id="meetingID" placeholder={meetingID} name="meetingID" />
        </label>
        <button type="submit">Change</button>
      </form>
    </main>
  );
};

export default PlaceholderContent;
