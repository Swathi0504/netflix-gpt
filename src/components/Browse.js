import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRated';
import usePopularMovies from '../hooks/usePopular';
import useUpcomingMovies from '../hooks/useUpcoming';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
     <Header/>
    {showGptSearch ? <GPTSearch/> :
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>}
    </div>
  )
}

export default Browse