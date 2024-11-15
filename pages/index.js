import React from 'react';
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
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <div style={{ 
      backgroundImage: "url('/images/background.jpeg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh',
      color: '#fff',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Optional: Replace with just text or no image */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem' }}>Silent Mentor</h1>
      </div>

      {/* Welcome Text */}
      <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>Welcome to Silent Mentor</h1>
      <p style={{ fontSize: '1.2rem', margin: '0.5rem' }}>
        Speak to minds, speak your mind
      </p>

      {/* Sign-In Button */}
      <button 
        onClick={handleSignIn} 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Sign in with Google
      </button>

      {/* Footer */}
      <footer style={{ 
        position: 'absolute', 
        bottom: '10px', 
        right: '10px', 
        fontSize: '0.8rem' 
      }}>
        <p>made by Eba Gude</p>
      </footer>
    </div>
  );
};

export default HomePage;

