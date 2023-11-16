import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
   const { onSearch } = props;
   const [id, setID] = useState('');
   const getRandomInt = (min, max) =>{
      return Math.floor(Math.random() * (max - min) + min);
   };

   const handleChange = (event) =>{
      const idGuardar = event.target.value;
      setID(idGuardar); 
   }

   return (
      <div className={style.flex}>
         <input className={style.input1} type='search' onChange={handleChange} value={id}/>
         <button className={style.botonAdd} onClick={() => {onSearch(id)}}>Agregar</button>
         <button className={style.botonAdd} onClick={() => {onSearch(getRandomInt(0, 826))}}>
            Aleatorio
         </button>
      </div>
   );
}
