import React, {useState} from 'react'
import {Search} from './SearchBarStyles.js'
export default function SearchBar(props) {
   //debugger;

   const [character, setCharacter] = useState("")

   function handleInputChange(event){
      const {value} = event.target;
      return setCharacter(value)
   }

   const {onSearch} = props;
   return (
      <Search>
         <input type="search" onChange={handleInputChange}/>
         <button onClick={() => onSearch(character)}>agregar</button>
         
      </Search>
   );
}
