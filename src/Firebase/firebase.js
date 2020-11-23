import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBE-OrXs9SWkMaCpWwvMVizMyyzoLYjv8M",
  authDomain: "clone-ce7f3.firebaseapp.com",
  databaseURL: "https://clone-ce7f3.firebaseio.com",
  projectId: "clone-ce7f3",
  storageBucket: "clone-ce7f3.appspot.com",
  messagingSenderId: "345913646557",
  appId: "1:345913646557:web:8df2d30bdd34d8fce96a34",
  measurementId: "G-V1WRFR8B27"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
