import React from "react";
import MovieItem from "../movie-item/MovieItem";

function MovieList(props) {
  const { movies } = props;
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
