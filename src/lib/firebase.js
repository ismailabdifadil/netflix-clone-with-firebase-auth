// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjYgJNx0rPUZs2yHeK4lZivDEoUA74q2U",
  authDomain: "ntf-clone-e5809.firebaseapp.com",
  projectId: "ntf-clone-e5809",
  storageBucket: "ntf-clone-e5809.appspot.com",
  messagingSenderId: "374267356568",
  appId: "1:374267356568:web:c081224b53cdf45f40f7ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
