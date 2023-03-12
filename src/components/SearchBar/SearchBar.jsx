import {Search} from './SearchBarStyles.js'
export default function SearchBar(props) {
   //debugger;
   return (
      <Search>
         <input type="search" />
         <button onClick={() => props.onSearch("cosa")}>agregar</button>
         
      </Search>
   );
}
