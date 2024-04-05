// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsl8Xs0aFoZ9ZTC-cpvqeVXDUWxq2EMKc",
  authDomain: "react-netflix-1807e.firebaseapp.com",
  projectId: "react-netflix-1807e",
  storageBucket: "react-netflix-1807e.appspot.com",
  messagingSenderId: "507264846608",
  appId: "1:507264846608:web:0694e6feb52ed1cb8fb395",
  measurementId: "G-M25LSYET9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);