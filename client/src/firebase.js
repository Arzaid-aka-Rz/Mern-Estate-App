// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "arzaid-mern-estate.firebaseapp.com",
  projectId: "arzaid-mern-estate",
  storageBucket: "arzaid-mern-estate.appspot.com",
  messagingSenderId: "971433214199",
  appId: "1:971433214199:web:16b3d15e6359e1733013f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);