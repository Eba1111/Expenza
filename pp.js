// ProfilePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <header>
        <h1>Your Profile</h1>
        <button onClick={() => navigate('/silent-mentorship')}>Back to Silent Mentorship</button>
      </header>

      <section className="profile-details">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </section>

      <footer>
        <p>&copy; 2024 Silent Mentorship</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
