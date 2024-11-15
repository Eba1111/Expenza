// PersonalizationPage.js
import React, { useState, useEffect } from 'react';
import { db, auth, collection, query, where, getDocs, updateDoc, doc } from './firebase';
import { useNavigate } from 'react-router-dom';

const PersonalizationPage = () => {
  const [moods, setMoods] = useState('');
  const [goals, setGoals] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current user's profile from Firestore based on the user's UID
    const fetchUserProfile = async () => {
      const user = auth.currentUser;

      if (user) {
        const q = query(collection(db, 'profiles'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUserProfile(doc.data());
          setMoods(doc.data().moods);
          setGoals(doc.data().goals.join(', ')); // If goals are stored as an array
          setIsPublic(doc.data().isPublic);
        });
      }
    };

    fetchUserProfile();
  }, []);

  const handleSaveProfile = async () => {
    const user = auth.currentUser;
    if (user && userProfile) {
      const userRef = doc(db, 'profiles', userProfile.userId); // Document reference for the current user's profile
      await updateDoc(userRef, {
        moods: moods,
        goals: goals.split(',').map((goal) => goal.trim()), // Convert comma-separated goals into an array
        isPublic: isPublic,
      });
      navigate('/silent-mentorship'); // After saving, navigate to the mentorship page
    }
  };

  return (
    <div className="personalization-page">
      <h1>Personalize Your Profile</h1>
      <div className="form-group">
        <label htmlFor="moods">Current Mood</label>
        <input
          type="text"
          id="moods"
          placeholder="Enter your current mood"
          value={moods}
          onChange={(e) => setMoods(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="goals">Goals</label>
        <input
          type="text"
          id="goals"
          placeholder="Enter your goals (comma separated)"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="isPublic">
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          Make Profile Public (Mentor Mode)
        </label>
      </div>

      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default PersonalizationPage;
