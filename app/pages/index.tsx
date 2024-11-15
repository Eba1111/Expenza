import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../auth'; // Ensure this is the correct path to your Firebase config

// Firebase Auth instance
const auth = getAuth(app);

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);

  // Function to handle Google Sign-Up
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Successfully signed up with Google!');
    } catch (error) {
      console.error("Error signing up with Google:", error);
      alert('Error signing up with Google');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Pricezy!</h1>
      <p>Get started by exploring the app.</p>

      {/* Displaying the Image */}
      <img src="/images/logo.png" alt="Welcome to Pricezy" style={{ width: '150px', height: 'auto', margin: '20px 0' }} />

      {/* Get Started Button */}
      <button onClick={() => setShowSignUp(true)} style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>

      {/* Conditional Rendering of the Sign-Up Form */}
      {showSignUp && (
        <div style={{ marginTop: '20px' }}>
          <h2>Sign Up</h2>
          <button onClick={handleGoogleSignUp} style={{ padding: '10px 20px', fontSize: '16px' }}>Sign up with Google</button>
        </div>
      )}
    </div>
  );
}

