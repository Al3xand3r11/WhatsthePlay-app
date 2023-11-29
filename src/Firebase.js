import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYy37M0tEXXeA0rsN-0SxlCOk1rjnSduA",
  authDomain: "whatstheplay-app.firebaseapp.com",
  projectId: "whatstheplay-app",
  storageBucket: "whatstheplay-app.appspot.com",
  messagingSenderId: "542259948242",
  appId: "1:542259948242:web:50dd43cc2cc2b6d4c0db0b",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()