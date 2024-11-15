// pages/second-page.js

import React, { useState } from 'react';

const SecondPage = () => {
  const [isMentor, setIsMentor] = useState(false);

  const handleMentorToggle = () => {
    setIsMentor(!isMentor);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem' }}>
      <h1>Personal Goals & Mentorship</h1>
      
      {/* Questions for user input */}
      <div>
        <label>
          <h3>1. How do you always feel?</h3>
          <input type="text" placeholder="Describe your general feelings..." style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        </label>
        
        <label>
          <h3>2. What do you want to achieve?</h3>
          <input type="text" placeholder="Describe your goals..." style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        </label>
        
        <label>
          <h3>3. [Additional Question]</h3>
          <input type="text" placeholder="Answer here..." style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        </label>
        
        <label>
          <h3>4. [Additional Question]</h3>
          <input type="text" placeholder="Answer here..." style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        </label>

        <label>
          <h3>5. [Additional Question]</h3>
          <input type="text" placeholder="Answer here..." style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        </label>
      </div>
      
      {/* Mentorship toggle */}
      <div style={{ marginTop: '1.5rem' }}>
        <label>
          <h3>Would you like to be a mentor?</h3>
          <input type="checkbox" checked={isMentor} onChange={handleMentorToggle} />
          <span style={{ marginLeft: '0.5rem' }}>Enable public profile</span>
        </label>
      </div>
      
      {/* Area of Interests */}
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Area of Interests</h3>
        <input type="text" placeholder="e.g., Technology, Health, etc." style={{ width: '100%', padding: '0.5rem' }} />
      </div>
    </div>
  );
};

export default SecondPage;

