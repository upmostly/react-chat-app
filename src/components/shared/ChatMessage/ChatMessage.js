import { firebaseAuth } from "../../../config/firebase";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass =
    uid === firebaseAuth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            "https://media-exp1.licdn.com/dms/image/C4D03AQGdjRH_8EOjAA/profile-displayphoto-shrink_400_400/0/1641733341873?e=1670457600&v=beta&t=nWuW9BjwZxZ4g4jkl6B7cD4TkUd7kBr0JQwCU87dv5E"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
