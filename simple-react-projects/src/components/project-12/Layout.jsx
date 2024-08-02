import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function Layout() {
  const [isSearching, setIsSearching] = useState(false);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async (username) => {
    if (!username) return; // Avoid making requests with empty usernames
    try {
      setLoading(true);
      setError(null);
      setUser(null);
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (e) {
      setError('User not found or an error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser(userName);
  }, [isSearching, fetchUser]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Search GitHub User</h1>
          <div className="w-full max-w-md flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full py-2 px-4 border-none outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setIsSearching(!isSearching)}
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>

          {loading && <p className="mt-4 text-blue-500">Loading...</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {user && (
            <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-700 mb-2">Username: {user.login}</p>
              <p className="text-gray-700 mb-2">Account Url: <a href={`https://github.com/${userName}/`}>here</a></p>
              <p className="text-gray-700 mb-2">Bio: {user.bio || 'No bio available'}</p>
              <img src={user.avatar_url} alt={user.name} className="w-32 h-32 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
