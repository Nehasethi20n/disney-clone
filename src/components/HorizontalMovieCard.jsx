/* eslint-disable react/prop-types */

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function HorizontalMovieCard({ movie }) {
  return (
    <div className="w-[110px] md:w-[260px] flex flex-col hover:scale-110 rounded-md">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] hover:border-2 hover:border-white cursor-pointer rounded-md"
      />
      <span className="text-white w-[110px] md:w-[260px] mt-2">{movie.title}</span>
    </div>
  );
}

export default HorizontalMovieCard;
