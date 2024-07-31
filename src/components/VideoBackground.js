import React from 'react'
import useTrailervideo from '../hooks/useTrailervideo'
import { useSelector } from 'react-redux';

const VideoBackground = ({movie_id}) => {
 
 // const [trailerId,setTrailerid] = useState(null);

  useTrailervideo(movie_id); 

  const trailerVideo = useSelector(store => store.movies.trailerVideo)
  const trailerId = trailerVideo?.key;

  return (
    <div className=''>
      <iframe 
      className="w-screen aspect-video" 
      src={"https://www.youtube.com/embed/"+trailerId+"?autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameBorder="0"
      allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default VideoBackground