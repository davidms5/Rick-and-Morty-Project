import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


function Detail() {

  const {id} = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() =>{

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   }).catch(err => console.log(err);
   return setCharacter({});

  }, [id])

  return (
    <div>Detail
      <h1>hola</h1>
    </div>
  )
}

export default Detail
