import { DivCard } from "./CardStyles";
import { Link } from "react-router-dom";
export default function Card(props) {

   const {name, species, gender, image, onClose, id} = props
   return (
      <DivCard>
         <button className="card_btn" onClick={onClose} >X</button>

         <Link to={`/Detail/${id}`}><h2>{name}</h2></Link>
         <img src={image} alt={name} />
         <div className="race">
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
      </DivCard>
   );
}
