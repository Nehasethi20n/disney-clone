/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import globalApi from "../services/globalApi";
import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import MovieCard from "./MovieCard";
import HorizontalMovieCard from "./HorizontalMovieCard";
function MovieList({ genreId, index }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenre();
  });
  const getMovieByGenre = () => {
    globalApi.getMovieByGenreId(genreId).then((response) => {
      setMovieList(response.data.results);
    });
  };
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  console.log(index)
  return (
    <div className="relative">
       <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index%3===0?'mt-[80px]':'mt-[150px]'} `}/>

      <div ref={elementRef} className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 scroll-smooth">
        {movieList.map((movie) => (

          <>{index % 3 === 0 ? <HorizontalMovieCard movie={movie}/> : <MovieCard movie={movie} />}</>
        ))}
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index%3===0?'mt-[80px]':'mt-[150px]'}`}/> 
      </div>
    </div>
  );
}

export default MovieList;
