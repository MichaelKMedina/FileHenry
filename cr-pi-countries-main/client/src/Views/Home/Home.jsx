import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import FilterBar from "../../components/FilterBar/FilterBar";
import { getAllCountries, orderCards, filterCards, filterCardsByActivity } from "../../redux/actions";
import style from "./Home.module.css"
import { useEffect } from "react";

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

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className={style.home}>
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
