import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/SearchBar/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'


function App () {


  const [characters, setCharacters] = useState([])

  async function onSearch(element){

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${element}`);
        const data = await response.json();

        const filtro = characters.filter(char => char.id === data.id).length === 0 //filtro para verificar que no haya repetidos

        if(data.name && filtro){
          setCharacters([...characters, data]);

        } else if(!filtro){
          window.alert("no puede haber ID's repetidos");

        } else window.alert("no hay ningun personaje con ese ID");
        
      } catch (error) {
        console.log(error)
      }
    
    
  }

  function onClose(id){
    const filtrado = characters.filter(character => character.id !== id);
    setCharacters( filtrado)
  }
  return (
    <div className='App' style={{ padding: '25px' }}>

      <img src='rick-morty-logo.png' alt='imagenes' style={{width:"100%", height:"auto", maxWidth:"800px"}}/>
      <div>
        <Nav
          onSearch={onSearch}
          
        />
      </div>
      
      <br/>
      
      <br/>
    
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Home' element={(<div className='mazeCards'>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>)}/>

        <Route path='/Detail/:detailId' element={<Detail/>}/>


      </Routes>
      
      <hr />
      
    </div>
  )
}

export default App
