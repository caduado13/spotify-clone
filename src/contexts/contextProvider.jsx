import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '57e2cea22cmshd3db17b9413fb60p1a4ad2jsn9b0d05f609e4',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

;


const StateContext = createContext();



export const ContextProvider = ({children}) =>{
  const [spotifyData, setSpotifyData] = useState(null);

useEffect(()=>{
  axios.request(options).then(function (response) {
    setSpotifyData(response.data)
  }).catch(function (error) {
    console.error(error);
  })
}, [])

    return(<StateContext.Provider
      value={{spotifyData}}
    >
      {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)