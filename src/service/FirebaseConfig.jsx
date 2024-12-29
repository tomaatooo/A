// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Aj6g7l8V9HFPNp3e7fsJaPdMKqqdxJE",
  authDomain: "ai-trip-planner-23027.firebaseapp.com",
  projectId: "ai-trip-planner-23027",
  storageBucket: "ai-trip-planner-23027.firebasestorage.app",
  messagingSenderId: "292576068128",
  appId: "1:292576068128:web:e2eeeb59ffc8f75e9ff245"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)