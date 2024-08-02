import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function Layout() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [per, setPer] = useState(0);

  const handleScroll = useCallback(() => {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (height > 0) {
      const scrollPercentage = (howMuchScroll / height) * 100;
      setPer(scrollPercentage);
    }
  }, []);

  useEffect(() => {
    const fetchNames = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await axios.get("https://dummyjson.com/users"); // Replace with your API endpoint
        setNames(
          response.data.users.map(
            (user) => user.firstName + " " + user.lastName
          )
        );
      } catch (error) {
        setError("Failed to fetch names"); // Set a descriptive error message
      }
      setLoading(false);
    };

    fetchNames();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg relative">
        <div
          className="fixed top-0 left-0 right-0 h-2 bg-gray-200"
          style={{
            width: `${per}%`,
            transition: "width 0.2s ease-out",
          }}
        >
          <div
            className="absolute inset-0 bg-blue-500"
            style={{
              width: "100%",
              height: "100%",
              transform: `translateX(-${100 - per}%)`,
              transition: "transform 0.2s ease-out",
            }}
          ></div>
        </div>
        <div className="p-6 flex flex-col items-center">
          {loading && <p className="text-blue-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {names.length > 0 && (
            <ul className="list-disc pl-5">
              {names.map((name, index) => (
                <li key={index} className="mb-2">
                  {name}
                </li>
              ))}
            </ul>
          )}

          {/* Scroll Indicator */}
          {names.length > 0 && (
            <div
              className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-lg"
              style={{ opacity: per / 100, zIndex: 10 }}
            >
              Scroll Progress: {Math.round(per)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
