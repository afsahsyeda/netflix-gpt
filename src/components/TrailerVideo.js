import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const TrailerVideo = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const trailer = useSelector((store) => store.movies?.trailer);
  const movie = !nowPlayingMovies ? null : nowPlayingMovies[0];
  useMovieTrailer(movie?.id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailer?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default TrailerVideo;
