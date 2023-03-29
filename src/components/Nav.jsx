import React from 'react'
import {FaSpotify} from "react-icons/fa";
import {BsSearch} from "react-icons/bs"
import {AiFillHome, AiOutlinePlusSquare, AiFillHeart} from "react-icons/ai"
import {ImBooks} from "react-icons/im"
import { ContextProvider } from '../contexts/contextProvider';

const Nav = ({children}) => {
  return (
    <div className='flex h-full'>

    <div className="bg-black text-white min-h-screen w-56 p-5">
      <div className="flex  py-3 items-center">
        <FaSpotify color='#00d856'  size={40}/>
        <h1 className='text-2xl p-1 font-bold'>Spotify</h1>
      </div>
      <div>
        <div className="flex items-center py-2 text-16 cursor-pointer font-bold text-gray-400">
          <p className='pr-3'><AiFillHome/></p>
          <p>Início</p>
        </div>
        <div className="flex items-center py-2 text-16 cursor-pointer font-bold text-gray-400">
          <p className='pr-3'><BsSearch/></p>
          <p>Buscar</p>
        </div>
        <div className="flex items-center py-2 text-16 cursor-pointer font-bold text-gray-400">
          <p className='pr-3'><ImBooks/></p>
          <p>Sua biblioteca</p>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex items-center py-2 text-16 cursor-pointer font-bold text-gray-400">
          <p className="pr-3"><AiOutlinePlusSquare/></p>          
          <p>Criar playlist</p>          
        </div>
        <div className="flex items-center py-2 text-16 cursor-pointer font-bold text-gray-400">
          <p className="pr-3"><AiFillHeart/></p>          
          <p>Músicas curtidas</p>          
        </div>
      </div>
    </div>
    <ContextProvider>
      <main className="bg-main-dark-bg calc px-6">{children}</main>
    </ContextProvider>
    </div>
  )
}

export default Nav
