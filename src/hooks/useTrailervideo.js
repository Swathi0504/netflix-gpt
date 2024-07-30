import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailervideo = (movie_id) => {

  //getting trailer video and adding it to store

  const dispatch = useDispatch();

  const getMovieVideos = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', API_OPTIONS);
    const json = await data.json();

    const videos = json.results.filter(video => video.name === "Official Trailer")

    const trailer = (videos.length===0)?json.results[0]:videos[0];
   
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(()=>{
    getMovieVideos();
  },[])
}


export default useTrailervideo;