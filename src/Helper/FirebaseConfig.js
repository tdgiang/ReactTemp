// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhMIROiU_an9RTBaSlKuxZR-5KuUKMwc",
  authDomain: "dcvcard-9fc36.firebaseapp.com",
  projectId: "dcvcard-9fc36",
  storageBucket: "dcvcard-9fc36.appspot.com",
  messagingSenderId: "609156743413",
  appId: "1:609156743413:web:668a91613a18dfe2fc05bc",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;
