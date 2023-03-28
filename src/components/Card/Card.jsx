import { DivCard } from "./CardStyles";
import { Link } from "react-router-dom";
import { addFavourite,deleteFavourite } from "../../Redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
 function Card(props) {
    
   const {name, species, gender, image, onClose, id, deleteFavourite, addFavourite, myFavorites} = props

   const [isFav, setIsFav] = useState(false);

   const handleFavourite = () =>{
      if(isFav){
         setIsFav(false);
         deleteFavourite(id);
      } else {
         setIsFav(true);
         addFavourite({name, species, gender, image, onClose, id})
      }
   }

   useEffect(() =>{

      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])

   return (
      <DivCard>
         {
          isFav ? (
         <button onClick={handleFavourite}>❤️</button>
           ) : (
         <button onClick={handleFavourite}>🤍</button>
            )
         }
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

export function mapDispatchToProps(dispatch){
   return {
      addFavourite: (character) =>{
         dispatch(addFavourite(character));
      },
      deleteFavourite: (id) =>{
         dispatch(deleteFavourite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Card);