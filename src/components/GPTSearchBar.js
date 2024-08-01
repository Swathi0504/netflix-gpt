import React from 'react'
import { useSelector } from 'react-redux'
import langConstants from '../utils/langConstants'
const GPTSearchBar = () => {
  
   const langSelected = useSelector((store)=>store.config.lang); 

  return (
    <div className='pt-[48px] pl-[550px] bg-gray-900'>
        <input placeholder={langConstants[langSelected].searchtext} className='border bg-gray-900 bg-opacity-15 border-white p-2 text-white w-[350px]'/>
        <button className='text-red-600 text-[30px] mx-4'><i className="fa fa-search"></i></button>
    </div>
  )
}

export default GPTSearchBar