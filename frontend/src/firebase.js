// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAlkSipkr4s4egknYt96LpqtImW0hdCpT8",
  authDomain: "stackoverflow-85316.firebaseapp.com",
  projectId: "stackoverflow-85316",
  storageBucket: "stackoverflow-85316.appspot.com",
  messagingSenderId: "551805880159",
  appId: "1:551805880159:web:bd69e7309d778cd44f98ea",
  measurementId: "G-22N0MMSTBE"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()



