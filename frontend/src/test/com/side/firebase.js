// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCYlLyqTfS7maqF7aEyOO88Vl7RZ9VBa3E",
  authDomain: "patient-hub-1859b.firebaseapp.com",
  projectId: "patient-hub-1859b",
  storageBucket: "patient-hub-1859b.appspot.com",
  messagingSenderId: "364095629215",
  appId: "1:364095629215:web:79c23a4705cfc9e038ffaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export default app;