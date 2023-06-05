import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:moviesId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
