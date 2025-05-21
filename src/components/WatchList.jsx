import { useContext, useEffect, useState } from "react";
import { ALL_GENRES, genreMap } from "../constants/constants";
import { WatchListContext } from "../context/watchListContext";
import { getGenreFromGenreIds } from "../utils";
import {
  NO_WATCHLIST_MOVIES,
  WATCHLIST_TABLE_HEADERS,
} from "../constants/constants";

const handleAscRatings = (watchList, setWatchList) => {
  const sorted = watchList.sort((a, b) => a.vote_average - b.vote_average);
  setWatchList([...sorted]);
};

const handleDescRatings = (watchList, setWatchList) => {
  const sorted = watchList.sort((a, b) => b.vote_average - a.vote_average);
  setWatchList([...sorted]);
};

export const WatchList = () => {
  const { watchList, removeFromWatchList } = useContext(WatchListContext);
  const [search, setSearch] = useState("");
  const [genreList] = useState([...Object.values(genreMap), ALL_GENRES]);
  const [movies, setMovies] = useState([...watchList]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);

  useEffect(() => {
    let filtered = watchList;

    if (selectedGenre !== ALL_GENRES) {
      filtered = filtered.filter((movie) =>
        getGenreFromGenreIds(movie.genre_ids).includes(selectedGenre)
      );
    }

    if (search) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().startsWith(search.toLowerCase())
      );
    }

    setMovies([...filtered]);
  }, [watchList, selectedGenre, search]);

  if (watchList.length === 0) {
    return <p className="m-4">{NO_WATCHLIST_MOVIES}</p>;
  }

  return (
    <div className="flex flex-col gap-10 justify-center ">
      <div className="flex w-[100%] h-auto gap-2 flex-wrap justify-center">
        {genreList.map((genre, i) => {
          const isActive = genre === selectedGenre;
          return (
            <div
              key={i}
              className={`flex justify-center items-center h-[2.5rem] w-[8rem] rounded font-bold cursor-pointer 
                    ${isActive ? "bg-blue-400" : "bg-gray-400"}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter movie..."
          className="border-1 border-gray-500 px-3 h-15 w-100 rounded bg-gray-50 i"
        />
      </div>
      <div className="border border-gray-400 rounded-lg mx-5 overflow-hidden">
        <table className="w-full bg-white border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 font-medium text-gray-900">
                {WATCHLIST_TABLE_HEADERS.Name}
              </th>
              <th className="font-medium text-gray-900">
                <div className="flex items-center">
                  <i
                    className="fa-solid fa-arrow-up cursor-pointer"
                    onClick={handleDescRatings}
                  ></i>
                  <div>{WATCHLIST_TABLE_HEADERS.Ratings}</div>
                  <i
                    className="fa-solid fa-arrow-down cursor-pointer"
                    onClick={handleAscRatings}
                  ></i>
                </div>
              </th>
              <th className="font-medium text-gray-900">
                {WATCHLIST_TABLE_HEADERS.Popularity}
              </th>
              <th className="font-medium text-gray-900">
                {WATCHLIST_TABLE_HEADERS.Genre}
              </th>
              <th className="font-medium text-gray-900">
                {WATCHLIST_TABLE_HEADERS.Actions}
              </th>
            </tr>
          </thead>
          {movies?.map((movie) => (
            <tbody
              className="border-t border-gray-900 divide-y divide-gray-500"
              key={movie.id}
            >
              <tr>
                <td className="px-6 py-4 flex items-center font-normal text-gray-900 gap-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="movie-poster"
                    className="h-[5rem] w-[8rem] object-cover"
                  />
                  <div className="text-sm font-medium">{movie.title}</div>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
                <td>
                  {movie.genre_ids.map((item) => genreMap[item]).join(",")}
                </td>
                <td>
                  <i
                    className="fa-solid fa-trash cursor-pointer text-red-600"
                    onClick={() => removeFromWatchList(movie.id)}
                  ></i>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
