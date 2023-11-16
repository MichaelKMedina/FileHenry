import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

const Card = (props) => {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.allCharacters);
   const {id, name, species, gender, image, onClose, status} = props;
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   return (
      <div className={style.carta}> 
         {
            isFav ? 
            (<button onClick={handleFavorite}>❤️</button>) :
            (<button onClick={handleFavorite}>🤍</button>)
         }   
         <button onClick={() => {onClose(id)}}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{id}</h2>
         <img src={image} alt='' />
      </div>
   );
}

export default Card;
