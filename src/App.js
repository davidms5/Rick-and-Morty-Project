import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
//import SearchBar from './components/SearchBar/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import Nav from './components/SearchBar/Nav'

const example = {
  name: 'Morty Smith',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

function App () {

  

  const [characters, setCharacters] = useState([])

  function onSearch(element){
    return setCharacters([...characters, element])

  }
  return (
    <div className='App' style={{ padding: '25px' }}>

      <img src='rick-morty-logo.png' alt='imagenes' style={{width:"100%", height:"auto", maxWidth:"800px"}}/>
      <div>
        <Nav
          onSearch={() => onSearch(example)}
        />
      </div>
      
      <br/>
      
      <br/>
        <div className='imagen'>
        </div>

      <div className='mazeCards'>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
