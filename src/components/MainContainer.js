import { useSelector } from "react-redux";
import TrailerTitle from "./TrailerTitle";
import TrailerVideo from "./TrailerVideo";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;
  return (
    <div className="pt-[30%] md:pt-0 bg-black absolute">
      <TrailerTitle />
      <TrailerVideo />
    </div>
  );
};

export default MainContainer;
