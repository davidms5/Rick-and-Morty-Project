export default function SearchBar(props) {
   return (
      <div>
         <input type="search" />
         <button onClick={() => props.onSearch("cosa")}>agregar</button>
         {/* <input type='search' />
      <button onClick={}>Agregar</button> */}
      </div>
   );
}
