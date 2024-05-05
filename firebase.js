// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZWBQyx0BLQxLstvbxG2cNdODTIEjoq4",
  authDomain: "rn-socialnet.firebaseapp.com",
  projectId: "rn-socialnet",
  storageBucket: "rn-socialnet.appspot.com",
  messagingSenderId: "126557160952",
  appId: "1:126557160952:web:915ac5ed854e7e974fc20d",
  measurementId: "G-HT3Y9TR3BR"
};

// Initialize Firebase

!firebase.app.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app()



export default firebase