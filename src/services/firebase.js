import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "seth-mitchell.firebaseapp.com",
  projectId: "seth-mitchell",
  storageBucket: "seth-mitchell.appspot.com",
  messagingSenderId: "151941682153",
  appId: "1:151941682153:web:1eed9c2cff528b54f87178",
  measurementId: "G-T7H17LDG02",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
