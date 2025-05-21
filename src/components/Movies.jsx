import { useEffect } from "react";
import { Pagination } from "./Pagination";
import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import paginationSlice from "../redux/paginationSlice";
import { fetchMovieMiddleware } from "../middlewares/fetchMovieMiddleware";
import {
  ERROR_TEXT,
  MOVIE_LOADER_TEXT,
  TRENDING_MOVIES,
} from "../constants/constants";

export const Movies = () => {
  const { pageNo } = useSelector((state) => state.PaginationSlice);
  const { movies, loading, error } = useSelector((state) => state.MoviesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieMiddleware(pageNo));
  }, [pageNo]);

  const handlePrevious = () => {
    if (pageNo > 1) dispatch(paginationSlice.actions.handlePrevious());
  };

  const handleNext = () => {
    dispatch(paginationSlice.actions.handleNext());
  };

  if (loading) return <h4>{MOVIE_LOADER_TEXT}</h4>;

  if (error) return <h4>{ERROR_TEXT}</h4>;

  return (
    <div>
      <div className="text-2xl font-bold text-center text-black m-5">
        {TRENDING_MOVIES}
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
