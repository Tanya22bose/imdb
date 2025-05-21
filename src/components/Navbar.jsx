import { Link } from "react-router-dom";
import logo from "../assets/imdb.png";
import { MOVIES, WATCHLIST } from "../constants/constants";

const Navbar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-1">
      <Link to={"/"}>
        <img src={logo} alt="imdb-logo" className="w-20" />
      </Link>
      <Link to={"/"} className="text-blue-600 text-2xl font-bold">
        {MOVIES}
      </Link>
      <Link to={"/watchlist"} className="text-blue-600 text-2xl font-bold">
        {WATCHLIST}
      </Link>
    </div>
  );
};

export default Navbar;
