// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8PvManj4zlZI0gBHuI8McZwDzB2DUbYg",
  authDomain: "organic-farmer.firebaseapp.com",
  projectId: "organic-farmer",
  storageBucket: "organic-farmer.appspot.com",
  messagingSenderId: "633045539129",
  appId: "1:633045539129:web:a96b59afca9993e298f0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;