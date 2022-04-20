import { createContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import Page from "./Page";
import TopNav from "./TopNav";

export default function Maincontent() {
  const [Username, setUsername] = useState("text");

  return (
    <ProfileContext.Provider
      value={{ Username: Username, setUsername: setUsername }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div>
          <TopNav />
          <Page />
        </div>
      </div>
    </ProfileContext.Provider>
  );
}
