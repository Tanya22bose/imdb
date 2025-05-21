import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { WatchList } from "./components/WatchList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
