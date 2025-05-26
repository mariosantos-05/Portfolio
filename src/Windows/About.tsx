import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div>
        <h2>About Me</h2>
        <p>Placeholder text about yourself</p>
      </div>
      <img
        src="/path-to-your-profile-picture.jpg"
        alt="Profile"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default About;
