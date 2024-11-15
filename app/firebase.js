// Import required functions from the Firebase SDKs
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH9MdyiKWSeFAgsGhbLYbqOAVC2XP5e0w",
  authDomain: "pricezy-da58e.firebaseapp.com",
  projectId: "pricezy-da58e",
  storageBucket: "pricezy-da58e.appspot.com",
  messagingSenderId: "703471528541",
  appId: "1:703471528541:web:e654af9f3b793aebccfbb4",
  measurementId: "G-7K3NVC3V2F"
};

// Initialize Firebase app (use `getApps` and `getApp` to prevent reinitialization)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the Firebase services
export { app, auth, provider };

