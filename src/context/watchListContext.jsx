import React, { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();
export const WatchListContextWrapper = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const moviesFromLS = localStorage.getItem("watchList");
    if (moviesFromLS) {
      setWatchList(JSON.parse(moviesFromLS));
    }
  }, []);

  const addtoWatchList = (movie) => {
    const newMovies = [...watchList, movie];
    setWatchList(newMovies);
    localStorage.setItem("watchList", JSON.stringify(newMovies));
  };

  const removeFromWatchList = (id) => {
    const newMovies = [...watchList.filter((movie) => movie.id !== id)];
    setWatchList(newMovies);
    localStorage.setItem("watchList", JSON.stringify(newMovies));
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, setWatchList, addtoWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
