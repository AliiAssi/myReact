import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function Layout() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const handleInputChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const fetchStuff = useCallback(async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      if (res && res.data.length > 0) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    fetchStuff();
    if (users.length > 0) {
        const filtered = users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
      }
  }, [fetchStuff, searchTerm, users]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Search</h1>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Enter search term..."
              className="flex-1 py-2 px-4 border-none outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="p-6 bg-gray-50">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="p-2 border-b border-gray-200">
                <p className="text-gray-700">{user.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
