// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARf63Fc3qOBoq9CI8ZRi2gTJEtiZD8424",
  authDomain: "netflixgpt-67041.firebaseapp.com",
  projectId: "netflixgpt-67041",
  storageBucket: "netflixgpt-67041.appspot.com",
  messagingSenderId: "1040737897246",
  appId: "1:1040737897246:web:e1e0dbcf47b2e5071d170f",
  measurementId: "G-108L03YP3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
