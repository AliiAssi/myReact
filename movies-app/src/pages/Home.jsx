import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/movies-list/MovieList";
import useFetchData from "../hooks/useFetchData";

export default function Home() {
  const theme = useSelector((state) => state.mode.value);
  const searchTerm = useSelector((state) => state.searchTerm.value);

  const themeClasses =
    theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white";
  const url = `https://www.omdbapi.com/?apikey=c8400cf5&s=${searchTerm}`;
  const { data, error, isLoading } = useFetchData(url, {});

  if (!searchTerm) {
    return (
      <div
        className={`min-h-screen ${themeClasses} flex items-center justify-center`}
      >
        <div className="text-center p-4 bg-gray-800 text-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Please enter a search term</h1>
        </div>
      </div>
    );
  }

  if (data.Response === "False") {
    return (
      <div
        className={`min-h-screen ${themeClasses} flex items-center justify-center`}
      >
        <div className="text-center p-4 bg-gray-800 text-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">{data.Error}</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`min-h-screen ${themeClasses} flex items-center justify-center`}
      >
        <div className="text-center p-4 bg-red-600 text-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Error</h1>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={`min-h-screen ${themeClasses} flex items-center justify-center`}
      >
        <div className="text-center p-4 bg-gray-800 text-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      <main className="px-4 py-8">
        <MovieList movies={data.Search} />
      </main>
    </div>
  );
}
