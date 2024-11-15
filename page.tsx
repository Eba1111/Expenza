// pages/index.tsx or page.tsx

import React, { useState } from 'react';

const HomePage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleGoogleSignUp = () => {
    // Your Google sign-up logic
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1>Welcome to Pricezy!</h1>
      <p>Get started by exploring the app.</p>

      {/* Updated image path */}
      <img
        src="/logo.png"
        alt="Pricezy Logo"
        className="w-auto h-auto max-w-full"
      />

      {/* Get Started Button */}
      <button onClick={() => setShowSignUp(true)}>Get Started</button>

      {/* Conditional Rendering of the Sign-Up Form */}
      {showSignUp && (
        <div>
          <h2>Sign Up</h2>
          <button onClick={handleGoogleSignUp}>Sign up with Google</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
