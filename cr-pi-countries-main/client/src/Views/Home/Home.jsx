import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import FilterBar from "../../components/FilterBar/FilterBar";
import { orderCards, filterCards } from "../../redux/actions";

const Home = ({ allCountries }) => {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <FilterBar handleOrder={handleOrder} handleFilter={handleFilter} />
      <Cards allCountries={allCountries} />
    </div>
  );
};

export default Home;
