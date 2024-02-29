import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { orderCards, filterCards } from "../../Redux/actions";
import { useState } from "react";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites.map((card) => {
        return (
          <Card
            id={card.id}
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin}
            image={card.image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
