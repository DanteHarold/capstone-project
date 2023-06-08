// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCma58rj_RjoadrkMgXjr142TLtJttj-W4",
  authDomain: "capstone-project-7bb53.firebaseapp.com",
  projectId: "capstone-project-7bb53",
  storageBucket: "capstone-project-7bb53.appspot.com",
  messagingSenderId: "100268403783",
  appId: "1:100268403783:web:0436f0e6467b894f471562",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
