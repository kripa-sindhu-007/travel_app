// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvZlAi4GihbsnJslXqs66L945_n-2thM4",
  authDomain: "ai-travel-planner-738da.firebaseapp.com",
  projectId: "ai-travel-planner-738da",
  storageBucket: "ai-travel-planner-738da.appspot.com",
  messagingSenderId: "655849564646",
  appId: "1:655849564646:web:61d1dbc9db6210177ece27",
  measurementId: "G-SLC6Q934T3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
