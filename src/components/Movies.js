import React from "react";
import { movies } from "../data";

const listMovies = movies.map((movie, index) => {
  return (
    <div key={index}>
      <h2>Name: {movie.title}</h2>
      <div>Time: {movie.time}</div>
      Genres:
      <ul>
        {movie.genres.map((genre,index) => {
          return <li key={index}>{genre}</li>;
        })}
      </ul>
    </div>
  );
});
function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies}
    </div>
  );
}

export default Movies;
