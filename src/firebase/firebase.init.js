// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCklCFzh72PJ9KdwzQ1-RxsNGFfUx-6_vQ",
  authDomain: "dragon-news-22814.firebaseapp.com",
  projectId: "dragon-news-22814",
  storageBucket: "dragon-news-22814.firebasestorage.app",
  messagingSenderId: "289507625271",
  appId: "1:289507625271:web:6d8b58f754307e4c2472b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
