import React, { useState } from 'react';
import axios from 'axios';

interface ResultItem {
  username: string;
  profileUrl: string;
}

function App() {
  const [followers, setFollowers] = useState<File | null>(null);
  const [following, setFollowing] = useState<File | null>(null);
  const [result, setResult] = useState<ResultItem[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!followers || !following) return;

    const formData = new FormData();
    formData.append('followers', followers);
    formData.append('following', following);

    try {
      const response = await axios.post('http://localhost:3001/api/compare', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>UnfollowedGram</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="followers">Followers file:</label>
          <input
            type="file"
            id="followers"
            onChange={(e) => setFollowers(e.target.files?.[0] || null)}
          />
        </div>
        <div>
          <label htmlFor="following">Following file:</label>
          <input
            type="file"
            id="following"
            onChange={(e) => setFollowing(e.target.files?.[0] || null)}
          />
        </div>
        <button type="submit">Compare</button>
      </form>
      {result.length > 0 && (
        <div>
          <h2>Users you follow who don't follow you back:</h2>
          <ul>
            {result.map((item) => (
              <li key={item.username}>
                <a href={item.profileUrl} target="_blank" rel="noopener noreferrer">
                  {item.username}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;