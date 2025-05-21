import axios from "axios";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [bannerImg, setBannerImg] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=f5e947d8488ecb3981a3cbd4783c400e"
      )
      .then((res) => {
        const movie = res.data.results[0];
        console.log(movie);
        setBannerImg(movie.backdrop_path);
        setTitle(movie.title);
      });
  }, []);
  return (
    <div
      className="h-[25vh] md:h-[65vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg${bannerImg}')`,
      }}
    >
      <div className="text-3xl text-white text-center w-full">{title}</div>
    </div>
  );
};
