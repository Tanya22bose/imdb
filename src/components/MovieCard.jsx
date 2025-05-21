import { useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

const doesContain = (movie, watchList) => {
  for (let i = 0; i < watchList?.length; i++) {
    if (movie.id === watchList[i].id) return true;
  }
  return false;
};

export const MovieCard = ({ movie }) => {
  const { watchList, addtoWatchList, removeFromWatchList } =
    useContext(WatchListContext);

  const isMovieWatchListed = doesContain(movie, watchList);

  return (
    <div
      className="w-[15rem] h-[18rem] bg-cover bg-center bg-no-repeat flex items-start duration-300 rounded-xl hover:cursor-pointer hover:scale-105"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
      }}
    >
      <div className="text-white flex justify-between text-center w-full p-2 bg-gray-700/50 rounded-t-xl">
        <span className="ml-2">{movie.title}</span>
        <div
          onClick={() =>
            isMovieWatchListed
              ? removeFromWatchList(movie.id)
              : addtoWatchList(movie)
          }
        >
          {isMovieWatchListed ? "❌" : "😍"}
        </div>
      </div>
    </div>
  );
};
