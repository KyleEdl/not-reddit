// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArZzf5SjUp3aveMXaICheqKE3pbYX9-3A",
  authDomain: "not-reddit-24a84.firebaseapp.com",
  projectId: "not-reddit-24a84",
  storageBucket: "not-reddit-24a84.appspot.com",
  messagingSenderId: "728334563246",
  appId: "1:728334563246:web:8d37bb1876c644578f7a3f",
  measurementId: "G-NT10FJ5LRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
