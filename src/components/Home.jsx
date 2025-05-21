import { lazy } from "react";

const Movies = lazy(() => import("./Movies"));
const Banner = lazy(() => import("./Banner"));

const Home = () => {
  return (
    <div>
      <Banner />
      <Movies />
    </div>
  );
};

export default Home;
