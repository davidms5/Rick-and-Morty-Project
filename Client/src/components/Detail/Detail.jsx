import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';


function Detail() {

  const navigate = useNavigate();
  const {detailId} = useParams(); //como en la url le puse :DetailId, eso es lo que tengo que destructurar para conseguir el valor que recibe en la url

  const [character, setCharacter] = useState({});

  useEffect(() =>{

    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   }).catch(err => console.log(err));
   return setCharacter({}); // esta parte del codigo borra la data existente cuando el component se desmonta

  }, [detailId])



  //data.status?.origin => esto es un ejemplo para cuando traiga los datos de un objeto si esta data es una promise o un async await
  let {name, status, species, gender, origin, image} = character
  //hacer un handleError para cuando el detailId no sea valido

  return (
    
    <>
        <button onClick={() => navigate(-1)}>volver</button>
        <br />
    <div>

    {character ?(<div style={{display:"flex", justifyContent:"space-between"}}>

      
      <div style={{color:"white"}}>
      
      <h1>Name: {name}</h1>
      <h2>status: {status}</h2>
      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin?.name}</h2>

      </div>
      <div>
        <img src={image} alt="not Found" />
      </div>

    </div>) : <h1>aun no se ha cargado nada</h1>}

    </div>
    </>
  )
}

export default Detail
