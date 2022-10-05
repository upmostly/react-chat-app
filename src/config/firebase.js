import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  //TODO Your configurations here
});
const firebaseFirestore = getFirestore(firebaseApp);
const firebaseAuth = getAuth();

export { firebaseApp, firebaseFirestore, firebaseAuth };
