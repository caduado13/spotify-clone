import React from 'react';
import {BsPlayFill} from "react-icons/bs"

const Card = ({image, title, description}) => {
  return (
    <div className="bg-black bg-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all cursor-pointer w-48 h-80 rounded-xl py-4 flex flex-col relative parent">
      <div className="bg-green-600 flex justify-center items-center absolute w-12 h-12 right-6 top-28 rounded-full child">
        <BsPlayFill size={35} color = "black"/>
      </div>
      <div className='w-3/4 h-44 mx-auto '>
        <img src={image} alt="" className="w-full h-full"/>
      </div>
      <div className='w-3/4 h-48 mx-auto py-5 flex flex-col justify-between'>
        <h1 className="text-white text-base text-h1 font-semibold">{title}</h1>
        <p className="text-opacity-50 text-white font-semibold text-xs text">{description}</p>
      </div>
    </div>
  )
}

export default Card
