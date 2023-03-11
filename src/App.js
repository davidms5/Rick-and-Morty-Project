import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'

//luego ver como queda con grid

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>

      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      
      <br/>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
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
