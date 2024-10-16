import { useSelector } from "react-redux";

const TrailerTitle = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const title = nowPlayingMovies[0]?.title;
  const overview = nowPlayingMovies[0]?.overview;

  return (
    <div className="absolute text-white w-screen aspect-video bg-gradient-to-r from-slate-950 pt-[20%] pl-24">
      <h1 className="text-6xl font-black">{title}</h1>
      <p className="text-2xl my-2 w-2/5">{overview}</p>
      <div className="flex">
        <button className="bg-white px-10 py-2 font-bold flex text-lg rounded-md text-black">
          Play
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
        <button className="bg-slate-600 px-10 py-2 font-bold flex text-lg rounded-md ml-1 bg-opacity-70">
          More Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default TrailerTitle;
