import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlap15mJ7eKFtvd8RkgzKB9yI72XmA8YQ",
    authDomain: "balajijyotishsansthan-aa1f0.firebaseapp.com",
    projectId: "balajijyotishsansthan-aa1f0",
    storageBucket: "balajijyotishsansthan-aa1f0.firebasestorage.app",
    messagingSenderId: "359109632687",
    appId: "1:359109632687:web:65b73adb4ebde324e92a5a",
    measurementId: "G-MP9WM2VBK7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };