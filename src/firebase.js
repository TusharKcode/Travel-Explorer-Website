// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9CUxJn065-eNGoZUEfuQzr3_xuNyoI0k",
  authDomain: "travelexplorer-6305b.firebaseapp.com",
  projectId: "travelexplorer-6305b",
  storageBucket: "travelexplorer-6305b.firebasestorage.app",
  messagingSenderId: "966384894366",
  appId: "1:966384894366:web:4fad74ec2d5bb361fd568f",
  measurementId: "G-0CTLBFS9S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);