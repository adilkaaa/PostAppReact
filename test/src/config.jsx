// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk4J9n7GshRpap0NmFz61ueqnSJcryxWc",
  authDomain: "test-db7e8.firebaseapp.com",
  projectId: "test-db7e8",
  storageBucket: "test-db7e8.appspot.com",
  messagingSenderId: "51998175784",
  appId: "1:51998175784:web:dd148ad314e7eab1b7bb1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);
export const provider =  new GoogleAuthProvider();
export const db = getFirestore(app);