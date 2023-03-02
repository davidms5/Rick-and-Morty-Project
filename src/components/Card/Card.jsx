import { DivCard } from "./CardStyles";
export default function Card(props) {

   const {name, species, gender, image, onClose} = props
   return (
      <DivCard>
         <button className="card_btn" onClick={onClose} style={{backgroundColor:"green"}}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} style={{ clipPath: "circle()"}}/>
         {/* <button onClick={}>X</button>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <img  src={} alt="" /> */}
      </DivCard>
   );
}
