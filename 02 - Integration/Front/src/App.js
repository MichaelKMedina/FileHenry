import style from './App.module.css';
import Home from './Views/Home/Home';
import Nav from './Views/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Detail from './Views/Detail/Detail.jsx';
import About from './Views/About/About.jsx';
import Form from './components/Form/Form';
import Favorites from './Views/Favorites/Favorites.jsx';

function App() {
   const [characters, setCharacters] = useState([]);
   const currenPath = useLocation().pathname;
   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   const EMAIL = '';
   const PASSWORD = '';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      if(id > 0 && id < 827){
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
            if(!characters.some((character) => character.id === data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            }
            else {
               window.alert('Ya fue agregado ese ID!');
            }
            })}
      else{
         window.alert('¡No hay personajes con este ID!');
      }
   };
   
   const onClose = (id) => {
      const charactersFiltrado = characters.filter((caracter) => caracter.id !== parseInt(id));
      setCharacters(charactersFiltrado);
   };

   return (
      <div className={style.App}>
         {currenPath !== '/' ? (<Nav onSearch={onSearch}/>) : null}
         <Routes>
            <Route path={'/'} element={<Form login={login}/>}/>
            <Route path={'/home'} element={<Home characters={characters} onClose={onClose}/>} />
            <Route path={'/about'} element={<About />}/>
            <Route path={'/favorites'} element={<Favorites />}/>
            <Route path={'/detail/:id'} element={<Detail />}/>
         </Routes>
         
      </div>
   );
}

export default App;
