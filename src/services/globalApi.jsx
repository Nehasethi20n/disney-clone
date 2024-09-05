import axios from 'axios';

// const movieBaseURL = "https://api.themoviedb.org/3";
// const apiKey='280eb277a7c05b1dc37979fa3ea54ba8'


const getTrendingVideos = axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=280eb277a7c05b1dc37979fa3ea54ba8');
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=280eb277a7c05b1dc37979fa3ea54ba8';
const getMovieByGenreId=(id)=>
  axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {
  getTrendingVideos,
  getMovieByGenreId
};
