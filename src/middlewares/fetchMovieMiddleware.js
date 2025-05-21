import MoviesSlice from "../redux/moviesSlice";

export const fetchMovieMiddleware = (params) => {
  return async (dispatch) => {
    dispatch(MoviesSlice.actions.movieLoading(true));
    const result = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=f5e947d8488ecb3981a3cbd4783c400e&language=en-US&page=1&page=${params}`
    );
    const data = await result.json();
    dispatch(MoviesSlice.actions.movieData(data.results));
    try {
    } catch (err) {
      dispatch(MoviesSlice.actions.movieError());
    }
  };
};
