import Card from '../Card/Card.jsx';
import { DivImages } from './CardsStyles.js';

export default function Cards(props) {
   const { characters } = props;
   return <DivImages >
      
      {characters.map(ob => <Card name={ob.name}
      species={ob.species}
      gender={ob.gender}
      image={ob.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}/>)}</DivImages>;
}
