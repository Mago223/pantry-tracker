// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-ff8d6.firebaseapp.com",
  projectId: "inventory-management-ff8d6",
  storageBucket: "inventory-management-ff8d6.appspot.com",
  messagingSenderId: "1031743163746",
  appId: "1:1031743163746:web:4f9e1858521f6a9f53703b",
  measurementId: "G-5J3TS3PXTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
