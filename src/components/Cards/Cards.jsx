import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return <div style={{display:"flex", justifyContent:"space-around"}}>{characters.map(ob => <Card name={ob.name}
      species={ob.species}
      gender={ob.gender}
      image={ob.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}/>)}</div>;
}
