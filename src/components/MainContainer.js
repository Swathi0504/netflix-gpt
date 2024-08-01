import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if(movies===null) return;
  
  //console.log(movies[0]);

  const mainmovie = movies[3];

  const {original_title,overview,id} = mainmovie;

  return (
    <div>
       <VideoTitle title={original_title} overview={overview} />
       <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer