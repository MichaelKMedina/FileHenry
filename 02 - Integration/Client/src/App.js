import style from "./App.module.css";
import Home from "./Views/Home/Home.jsx";
import Nav from "./Views/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./Views/Detail/Detail.jsx";
import About from "./Views/About/About.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./Views/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const currenPath = useLocation().pathname;
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login";
    axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    if (id > 0 && id < 827) {
      try {
        const { data } = await axios(`${URL}character/${id}`);
        if (!characters.some((e) => e.id == data.id)) {
          setCharacters(characters.concat(data));
        } else {
          window.alert("Ya fue agregado ese ID!");
        }
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  const onClose = (id) => {
    const charactersFiltrado = characters.filter(
      (caracter) => caracter.id !== parseInt(id)
    );
    setCharacters(charactersFiltrado);
  };

  return (
    <div className={style.App}>
      {currenPath !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
        <Route
          path={"/home"}
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path={"/about"} element={<About />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/detail/:id"} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
