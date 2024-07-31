import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";
const MovieCards = ({movie,path}) => {
  return (
    <div className="w-[200px] h-[300px] px-2 py-4">
        <img src={IMG_CDN_URL+path}/>
    </div>
  )
}

export default MovieCards