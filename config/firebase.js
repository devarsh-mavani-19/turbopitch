// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjBsGdqFMCt9yR2JpbT9HGZFpLlQEdgPc",
  authDomain: "auto-pitch-generator.firebaseapp.com",
  projectId: "auto-pitch-generator",
  storageBucket: "auto-pitch-generator.appspot.com",
  messagingSenderId: "1019792873032",
  appId: "1:1019792873032:web:d9e8a177d9926886616a7d",
  measurementId: "G-LLKF2XJCM6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
export const db = getFirestore(app);
