// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,                        //YOUR_API_KEY
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,                //YOUR_PROJECT_ID.firebaseapp.com
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,                  //YOUR_PROJECT_ID
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,          //YOUR_PROJECT_ID.addspot.com
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, //YOUR_SENDER_ID
  appId: import.meta.env.VITE_FIREBASE_APP_ID,                          //YOUR_APP_ID
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  return signInWithPopup(auth,provider);
}