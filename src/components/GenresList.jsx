/* eslint-disable react/jsx-key */

import genereList from '../constants/GenreList'
import MovieList from './MovieList'
function GenresList() {
  return (
    <div className='mt-10'>
{genereList.map((item,index)=>index<=4 && (
<div className='px-8 md:px-16'>
    <span className='text-base md:text-lg text-white font-bold'>{item.name}</span>
    <MovieList genreId={item.id} index={index}/>
    </div>
))}
    </div>
  )
}

export default GenresList