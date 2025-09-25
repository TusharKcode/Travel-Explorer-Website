// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9CUxJn065-eNGoZUEfuQzr3_xuNyoI0k",    //YOUR_API_KEY
  authDomain: "travelexplorer-6305b.firebaseapp.com",   //YOUR_PROJECT_ID.firebaseapp.com
  projectId: "travelexplorer-6305b",                    //YOUR_PROJECT_ID
  storageBucket: "travelexplorer-6305b.appspot.com",    //YOUR_PROJECT_ID.addspot.com
  messagingSenderId: "966384894366",                            //YOUR_SENDER_ID
  appId: "1:966384894366:web:4fad74ec2d5bb361fd568f",           //YOUR_APP_ID
  measurementId: "G-0CTLBFS9S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  return signInWithPopup(auth,provider);
}