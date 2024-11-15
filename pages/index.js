// pages/index.js

import React from 'react';
import Image from 'next/image';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase'; // Make sure Firebase is correctly configured

const HomePage = () => {
  const auth = getAuth(app);
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/second-page'; // Redirect to the second page
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/images/background.jpeg')", // Ensure this image exists in your public/images folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <header style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.8rem', color: 'gray' }}>
        made by Eba Gude
      </header>
      
      <h1 style={{ fontSize: '3rem' }}>Silent Mentor</h1>
      <p style={{ fontSize: '1.2rem' }}>Speak to minds, speak your mind</p>
      
      <button onClick={handleSignIn} style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', fontSize: '1.2rem', cursor: 'pointer' }}>
        Sign In with Google
      </button>
    </div>
  );
};

export default HomePage;

