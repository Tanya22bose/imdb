import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import paginationSlice from "../redux/paginationSlice";
import { fetchMovieMiddleware } from "../middlewares/fetchMovieMiddleware";

export const Movies = () => {
  const { pageNo } = useSelector((state) => state.PaginationSlice);
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.MoviesSlice);

  useEffect(() => {
    dispatch(fetchMovieMiddleware(pageNo));
  }, [pageNo]);

  const handlePrevious = () => {
    if (pageNo > 1) dispatch(paginationSlice.actions.handlePrevious());
  };

  const handleNext = () => {
    dispatch(paginationSlice.actions.handleNext());
  };

  if (loading) {
    return <h4>Trending movies loading...</h4>;
  }
  if (error) {
    return <h4>TRy again later...</h4>;
  }

  return (
    <div className="">
      <div className="text-2xl font-bold text-center text-black m-5">
        Trending Movies
      </div>
      <div className="flex justify-around gap-5 md:gap-8 flex-wrap">
        {movies.map((movie, i) => {
          return <MovieCard movie={movie} key={i} />;
        })}
      </div>
      <Pagination
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        pageNo={pageNo}
      />
    </div>
  );
};
