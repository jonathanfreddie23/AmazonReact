import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgn0zCuXCfy4KFivFIh8sJUK1T5refNfE",
  authDomain: "clone-jf.firebaseapp.com",
  projectId: "clone-jf",
  storageBucket: "clone-jf.appspot.com",
  messagingSenderId: "366996063741",
  appId: "1:366996063741:web:28ed04fdd6334aa88e8594",
  measurementId: "G-P3WFKE24MQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };