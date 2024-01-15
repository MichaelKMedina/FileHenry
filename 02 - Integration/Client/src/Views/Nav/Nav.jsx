import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { Link, useLocation } from 'react-router-dom';
import style from './Nav.module.css'

export default function Nav({ onSearch }) {
  const ruta = useLocation();
  const isHome = ruta.pathname === '/home';
  return (
    <div className={style.barra}>
        <div className={style.elementoNav}>
          <Link to={'/about'}>
            <button className={style.botonAdd}>About</button>
          </Link>
          <Link to={'/home'}>
            <button className={style.botonAdd}>Home</button>
          </Link>
          <Link to={'/favorites'}>
            <button className={style.botonAdd}>Favorites</button>
          </Link>
        </div>
        {isHome ? <div className={style.elementoNavSearch}><SearchBar onSearch={onSearch}/>
        </div> : null}
    </div>
  )
}