import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/SearchBar/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Page404 from './components/Page404/Page404'
import Form from './components/forms/Form'

//luego investigar bien que seria el Outlet en react router
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

  const start = (<div className='mazeCards'>
  <Cards
    characters={characters}
    onClose={onClose}
  />
</div>)
const {pathname} = useLocation()
  return (
    
    <div className='App' style={{ padding: '25px' }}>

      <img src='rick-morty-logo.png' alt='imagenes' style={{width:"100%", height:"auto", maxWidth:"800px"}}/>
      <div>
        {pathname !== "/" && <Nav
          onSearch={onSearch}
        />}
      </div>
      
      <br/>
      
      <br/>
    
      <Routes>

      <Route path='/' element={<Form/>}/>
      <Route path='/Home' element={start}/>
        

        <Route path='/About' element={<About/>}/>
        <Route path='/Detail/:detailId' element={<Detail/>}/>
        <Route path='*' element={<Page404/>}/>


      </Routes>
      
      <hr />
      
    </div>
  )
}

export default App
