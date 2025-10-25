// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxGQBFUycundUtRWBIaXwVz81EGip6zWg",
  authDomain: "warmpows.firebaseapp.com",
  projectId: "warmpows",
  storageBucket: "warmpows.firebasestorage.app",
  messagingSenderId: "680919109893",
  appId: "1:680919109893:web:b907b9c2324a595a76676c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



