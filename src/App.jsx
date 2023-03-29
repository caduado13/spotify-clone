import React from 'react'
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import Liked from './pages/Liked';
import Head from './components/Head';




function App() {
  return (
    <div>
      <Head/>
      <BrowserRouter>
      <Nav>
        <Routes>
          <Route path='/' element = {<Home marginTop={"mt-16"}/>} />
          <Route path='/search' element = {<Search marginTop={"mt-16"}/>}/>
          <Route path='/library' element = {<Library marginTop={"mt-16"}/>}/>
          <Route path='/playlist' element = {<Playlist marginTop={"mt-16"}/>}/>
          <Route path='/liked' element = {<Liked marginTop={"mt-16"}/>}/>
        </Routes>
      </Nav>
      
      </BrowserRouter>
    </div>
  )
}

export default App
