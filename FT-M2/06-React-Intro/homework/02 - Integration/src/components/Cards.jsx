import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return(
   <div>
      {characters.map((card) => {
         return <Card
               name={card.name}
               status={card.status}
               species={card.species}
               gender={card.gender}
               origin={card.origin}
               image={card.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
         })
      }
   </div>
   );
}
