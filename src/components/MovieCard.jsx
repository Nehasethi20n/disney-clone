/* eslint-disable react/prop-types */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({movie}) {
  return (
   
      <img src={IMAGE_BASE_URL + movie.poster_path} className="w-[110px] md:w-[200px] hover:border-2 hover:border-white hover:scale-110 rounded-md transition-all duration-150 ease-in"/>
    
  )
}

export default MovieCard