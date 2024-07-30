import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-72 px-20 bg-gradient-to-r from-black absolute'>
      <h1 className='text-5xl text-white font-semibold'>{title}</h1>
      <h1 className='pt-4  text-white w-1/2'>{overview}</h1>
      <div className='pt-4'>
        <button className='bg-white border rounded-md font-semibold px-2 py-2 w-24 mr-4 hover:bg-gray-300'> ► Play</button>
        <button className="text-white rounded-md font-semibold px-2 py-2 w-24 mr-4 bg-white bg-opacity-15 hover:bg-opacity-25">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle