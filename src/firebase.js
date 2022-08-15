// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaW2n2ar7s4CYcmzynijzljfb6XOV-uWU",
  authDomain: "taskerapp-f91c8.firebaseapp.com",
  projectId: "taskerapp-f91c8",
  storageBucket: "taskerapp-f91c8.appspot.com",
  messagingSenderId: "150284608649",
  appId: "1:150284608649:web:576c4bc5c7889d380b9258",
  measurementId: "G-48QFES765S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);