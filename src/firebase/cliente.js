// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ufJaK6s4MBWWge2LLv2htwMuxMGI1tk",
  authDomain: "e-comerceerik.firebaseapp.com",
  projectId: "e-comerceerik",
  storageBucket: "e-comerceerik.appspot.com",
  messagingSenderId: "879709274639",
  appId: "1:879709274639:web:1a54ac4d10edae571c197a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)