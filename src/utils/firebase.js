// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVzZo7uq1-eGA_NVqFth0omt5-chnWIgs",
  authDomain: "netflixgpt-2f4c9.firebaseapp.com",
  projectId: "netflixgpt-2f4c9",
  storageBucket: "netflixgpt-2f4c9.appspot.com",
  messagingSenderId: "163436106668",
  appId: "1:163436106668:web:0d4bffc6563dcf92a9a009",
  measurementId: "G-R6F6S6GPQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();