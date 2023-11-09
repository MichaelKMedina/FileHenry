import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return(
   <div className={style.grillaCard}>
      {characters.map((card) => {
         return <Card
               id={card.id}
               name={card.name}
               status={card.status}
               species={card.species}
               gender={card.gender}
               origin={card.origin}
               image={card.image}
               onClose={onClose}
               />
         })
      }
   </div>
   );
}
