/** @format */

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7RhcrejKGklYriAg_-cHO46h1925dMhU",
  authDomain: "vsev-25587.firebaseapp.com",
  projectId: "vsev-25587",
  storageBucket: "vsev-25587.appspot.com",
  messagingSenderId: "650205937830",
  appId: "1:650205937830:web:418366903437f1f2677467"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { auth, db };