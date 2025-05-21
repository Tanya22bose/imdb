import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const WatchList = lazy(() => import("./components/WatchList"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
