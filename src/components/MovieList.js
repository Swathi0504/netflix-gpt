import React from 'react'
import MovieCards from './MovieCards'


const MovieList = ({title,movies}) => {
  console.log(movies);  
  return (
    <div className='pl-16 pr-16'>
      <h1 className="text-white font-semibold text-xl">{title}</h1>  
      <div className="flex overflow-x-scroll">
        <div className="flex">
            {
                movies?.map((movie)=>(
                    <MovieCards key={movie.id} movie={movie} path={movie.poster_path}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList