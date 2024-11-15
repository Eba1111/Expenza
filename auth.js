// Existing Firebase initialization (ensure this matches your project)
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBH9MdyiKWSeFAgsGhbLYbqOAVC2XP5e0w",
  authDomain: "pricezy-da58e.firebaseapp.com",
  projectId: "pricezy-da58e",
  storageBucket: "pricezy-da58e.firebasestorage.app",
  messagingSenderId: "703471528541",
  appId: "1:703471528541:web:e654af9f3b793aebccfbb4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const handleGoogleSignUp = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Signed up with Google:', user);
      // Handle success (you can redirect to another page, etc.)
    })
    .catch((error) => {
      console.error('Error during Google sign up:', error);
    });
};
