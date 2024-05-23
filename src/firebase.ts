// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfbMIqHwDyDTdoestSUAFFZp8kvGNOguk",
  authDomain: "react-e4af6.firebaseapp.com",
  projectId: "react-e4af6",
  storageBucket: "react-e4af6.appspot.com",
  messagingSenderId: "933968629744",
  appId: "1:933968629744:web:70953ec6513420dbfb5735",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
