import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSignUp = async () => {
    console.log("Sign-up process started"); // Debugging line 1

    try {
      // Attempt to create the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user); // Debugging line 2

      // After successful sign-up, navigate to the second page using window.location.href
      console.log("Navigation to second page triggered"); // Debugging line 3
      window.location.href = '/second-page'; // This should redirect the page

    } catch (error) {
      console.error("Error during sign-up:", error); // Debugging line 4
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUpPage;

