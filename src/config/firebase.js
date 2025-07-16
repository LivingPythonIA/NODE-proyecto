import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'dotenv/config.js';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuiRmHvW3fSp8abHhM3IvMNxZLFQKB-_M",
  authDomain: "node-proyecto-eb361.firebaseapp.com",
  projectId: "node-proyecto-eb361",
  //storageBucket: "node-proyecto-eb361.firebasestorage.app",
  storageBucket: "node-proyecto-eb361.appspot.com",
  messagingSenderId: "317285944106",
  appId: "1:317285944106:web:6604546210eca63898ac53",
  measurementId: "G-SHXX3H1JN1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);