import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export default function TopNav(props) {
  const profileContextValue = useContext(ProfileContext);
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {profileContextValue.Username}
    </div>
  );
}
