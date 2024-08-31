/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import globalApi from "../services/globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const SCREEN_WIDTH=window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    globalApi.getTrendingVideos.then((response) => {
      setMovieList(response.data.results);
      console.log(response.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += SCREEN_WIDTH-110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -=SCREEN_WIDTH-110;
  };

  return (
    <>
      <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[170px]" onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[170px] right-0" onClick={()=>sliderRight(elementRef.current)}/>
      </div>
      <div className="flex overflow-x-auto w-full px-16 py-4 scroll-smooth scrollbar-hide" ref={elementRef}>
        {movieList.map((movie) => (
          <img
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full md:h-[350px] object-cover object-left-top rounded-md mr-5 hover:border-2 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
