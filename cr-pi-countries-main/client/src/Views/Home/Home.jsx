import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import FilterBar from "../../components/FilterBar/FilterBar";
import { orderCards, filterCards, filterCardsByActivity } from "../../redux/actions";

const Home = ({ allCountries }) => {
  const dispatch = useDispatch();

  const filterByActivity = (e) => {
    dispatch(filterCardsByActivity(e.target.value));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <FilterBar
        handleOrder={handleOrder}
        handleFilter={handleFilter}
        filterByActivity={filterByActivity}
      />
      <Cards allCountries={allCountries} />
    </div>
  );
};

export default Home;
