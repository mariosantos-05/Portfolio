import React from 'react';

const gallery: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div>
        <h2>gallery Me</h2>
        <p>Placeholder text gallery yourself</p>
      </div>
      <img
        src="/path-to-your-profile-picture.jpg"
        alt="Profile"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default gallery;
