import { firebaseAuth } from "../../../config/firebase";

function Logout() {
  return (
    firebaseAuth.currentUser && (
      <button className="sign-out" onClick={() => firebaseAuth.signOut()}>
        👋🏽
      </button>
    )
  );
}

export default Logout;
