import React from 'react';
import GitHubProjects from '../components/GitHubProjects';

const Work: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div className="min-w-[860px] min-h-[550px] bg-gray-50 dark:bg-gray-950 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My GitHub Projects
        </h1>
        <GitHubProjects />
      </div>
    </div>
  );
};

export default Work;
