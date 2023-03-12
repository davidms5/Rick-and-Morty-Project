import React, {useState} from 'react'
import {Search} from './SearchBarStyles.js'
export default function SearchBar(props) {
   //debugger;

   const [character, setCharacter] = useState(0)

   const {onSearch} = props;
   return (
      <Search>
         <input type="search" />
         <button onClick={() => onSearch("cosa")}>agregar</button>
         
      </Search>
   );
}
