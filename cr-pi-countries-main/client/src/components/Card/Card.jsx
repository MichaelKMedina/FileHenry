import style from "./Card.module.css";

const Card = ({ name, bandera, continente }) => {
  return (
    <div className={style.card}>
      <img className={style.cardimage} src={bandera}></img>
      <h2 className={style.cardtittle}>{name}</h2>
      <h3 className={style.cardtext}>{continente}</h3>
    </div>
  );
};

export default Card;
