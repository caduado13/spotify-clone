import React from 'react';
import {FaAngleLeft, FaSearch} from "react-icons/fa"


const Head = () => {
  return (
    <div className='bg-black text-white fixed z-10 calc left-56 h-14'>
      <div className="flex h-full items-center justify-between mx-5">
        <div className="flex items-center">
          <p className="px-2">
            <FaAngleLeft size={20}/>
          </p>
          <p className="px-2">
            <FaAngleLeft size={20} style = {{transform: 'rotate(180deg)' }}/>
          </p>
          <p className="px-2 relative">
            <FaSearch size={17} color="rgba(0,0,0,0.5)" 
            className="absolute left-5 bottom-1"/> 
            <input type="text" placeholder="O que você quer ouvir" 
            className="rounded-2xl w-80 pl-9 focus:outline-0 p-0.5 text-black"/>
          </p>
        </div>
        <div className="flex items-center">
          <p className="px-3 font-bold text-gray-400 text-16">Inscrever-se</p>
          <p className="px-3">
            <button className="rounded-full bg-white text-black w-24 font-bold h-10">Entrar</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Head
