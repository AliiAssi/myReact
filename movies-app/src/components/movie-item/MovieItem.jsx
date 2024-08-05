import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { append, remove } from '../../context/favoritesSlice/favoritesSlice'; // Adjust the import path as needed

export default function MovieItem({ movie }) {
  const theme = useSelector((state) => state.mode.value);
  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch();
  
  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID); // Ensure imdbID or a similar unique identifier

  const bg = theme === "dark" ? "bg-gray-800" : "bg-white";

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(remove(movie));
    } else {
      dispatch(append(movie));
    }
  };

  return (
    <div className={`${bg} rounded-lg shadow-lg overflow-hidden`}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
        <button
          onClick={handleFavoriteToggle}
          className="mt-2 p-2 rounded-full focus:outline-none"
        >
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}