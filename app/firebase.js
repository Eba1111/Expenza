// app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBH9MdyiKWSeFAgsGhbLYbqOAVC2XP5e0w',
  authDomain: 'pricezy-da58e.firebaseapp.com',
  projectId: 'pricezy-da58e',
  storageBucket: 'pricezy-da58e.firebasestorage.app',
  messagingSenderId: '703471528541',
  appId: '1:703471528541:web:e654af9f3b793aebccfbb4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting Firebase Auth instance
const auth = getAuth(app);

export { app, auth };
