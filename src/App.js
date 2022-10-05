import React from "react";
import "./App.css";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/shared/ChatRoom";
import { firebaseAuth } from "./config/firebase";
import Logout from "./components/shared/Logout";
import Login from "./components/shared/Login";

getAnalytics();

function App() {
  const [user] = useAuthState(firebaseAuth);
  return (
    <div className="App">
      <header>
        <img
          className="logo"
          src={
            "https://media-exp1.licdn.com/dms/image/C4E0BAQH_rUv_B2D53g/company-logo_200_200/0/1588445172804?e=1672876800&v=beta&t=IavOGphydKOcsodno1NAWhP76nVn6pGG3FytO8T2R8k"
          }
        />
        {user ? <h2>{`Welcome ${user?.displayName}`}</h2> : <></>}
        <Logout />
      </header>

      <section>{user ? <ChatRoom /> : <Login />}</section>
    </div>
  );
}

export default App;
