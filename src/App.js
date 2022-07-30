import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovisCard from "./MovisCard";

const API_URL = " http://www.omdbapi.com?apikey=e9c35e23";

const App = () => {
  const [movies, setMovis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    console.log(data);
    setMovis(data.Search);
  };
  useEffect(() => {
    searchMovies("Guardians of the Galaxy");
  }, []);
  return (
    <div className="app">
      <h1>Movies</h1>
      <div className="search">
        <input
          placeholder="search movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovisCard key={i} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
