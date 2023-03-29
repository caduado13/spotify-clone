import React, {useState, useEffect} from 'react'
import Card from '../components/Card';
import { useStateContext } from '../contexts/contextProvider';


const Home = () => {
const {spotifyData} = useStateContext();

if(!spotifyData) return null 

const playlists = spotifyData.playlists.items
console.log(playlists)
  return (
      <div>
        <h1 className="text-white font-bold text-28 pt-24 pb-7">Home</h1>
        <div className="wrapper">
          {!spotifyData ? (<p>Carregando...</p>) : playlists.map((item)=>(
            <Card 
              key={item.data.name} 
              image = {item.data.images.items[0].sources[0].url} 
              title = {item.data.name} 
              description = {item.data.description}
            />
          ))}
        </div>
      </div>
  )
}

export default Home
