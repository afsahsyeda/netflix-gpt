import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();
    console.log(json);
    const filterTrailers = json?.results?.filter(
      (obj) => obj.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    trailer && dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);
};

export default useMovieTrailer;
