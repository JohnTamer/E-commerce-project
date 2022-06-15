// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgDR7rS-pZapSsQYgUrqJXJOVgT1IjvZE",
  authDomain: "johnzone-ee4b3.firebaseapp.com",
  projectId: "johnzone-ee4b3",
  storageBucket: "johnzone-ee4b3.appspot.com",
  messagingSenderId: "767211326963",
  appId: "1:767211326963:web:9f5448aaf6b8cac1ff9686",
  measurementId: "G-F29LM4TZC5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
