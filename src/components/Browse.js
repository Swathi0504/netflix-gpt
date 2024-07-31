import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRated';
import usePopularMovies from '../hooks/usePopular';
import useUpcomingMovies from '../hooks/useUpcoming';

const Browse = () => {
  
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
     <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse