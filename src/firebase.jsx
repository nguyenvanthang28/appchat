
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLXF7t6IXQJysfFUK1Ztn_vylu1DGw8c",
  authDomain: "mychat-4e7fc.firebaseapp.com",
  projectId: "mychat-4e7fc",
  storageBucket: "mychat-4e7fc.appspot.com",
  messagingSenderId: "178435446113",
  appId: "1:178435446113:web:1b37cb3882eaabeee42120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth}