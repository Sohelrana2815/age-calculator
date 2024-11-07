// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlUxMqFijZPyL0jc_kgR_UQ1RpEy3x9aA",
  authDomain: "age-calculator-1f9ac.firebaseapp.com",
  projectId: "age-calculator-1f9ac",
  storageBucket: "age-calculator-1f9ac.firebasestorage.app",
  messagingSenderId: "701428614932",
  appId: "1:701428614932:web:cfe3b6b4fb794e0815e401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
