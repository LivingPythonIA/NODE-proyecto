// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuiRmHvW3fSp8abHhM3IvMNxZLFQKB-_M",
  authDomain: "node-proyecto-eb361.firebaseapp.com",
  projectId: "node-proyecto-eb361",
  storageBucket: "node-proyecto-eb361.firebasestorage.app",
  messagingSenderId: "317285944106",
  appId: "1:317285944106:web:6604546210eca63898ac53",
  measurementId: "G-SHXX3H1JN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// Initialize Analytics 
const analytics = getAnalytics(app);
