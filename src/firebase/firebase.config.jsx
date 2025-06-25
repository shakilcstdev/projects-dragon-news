// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1LRioB-gdWKPeIcH8YZjkGA3ovHHtDP0",
  authDomain: "dragon-breaking-news-c43b1.firebaseapp.com",
  projectId: "dragon-breaking-news-c43b1",
  storageBucket: "dragon-breaking-news-c43b1.firebasestorage.app",
  messagingSenderId: "511329797193",
  appId: "1:511329797193:web:f176915b0a1e9f84b3eb98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;