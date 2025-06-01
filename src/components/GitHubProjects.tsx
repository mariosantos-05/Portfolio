'use client';

import { useEffect, useState } from 'react';

type Repo = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
};

const LOCAL_DESCRIPTIONS: Record<string, string> = {
  'Trabalho-ICC':
    'Graph visualization and algorithms for Computational Science.',
  'imagens-processing': 'Experiments with image filters and manipulation.',
  'Processamento-de-imagens---trabalho-ICC':
    'Course project involving image processing techniques.',
  // Add more custom descriptions if you want
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/users/mariosantos-05/repos'
        );
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-xl transition-all p-5"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-1">
            {repo.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            {LOCAL_DESCRIPTIONS[repo.name] ||
              repo.description ||
              'No description provided.'}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
            <span>⭐ {repo.stargazers_count}</span>
            <span>{repo.language || 'Unknown'}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
