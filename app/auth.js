// auth.js
import firebase from './firebase'; // Import Firebase configuration from firebase.js

export const auth = firebase.auth();

export const signUpWithEmail = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error.message);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error.message);
  }
};

// Add other authentication functions as needed (e.g., Google sign-in)

